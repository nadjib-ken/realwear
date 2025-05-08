"use client"

import { useState, useEffect } from "react"
import "../styles/SizeSelector.css"

const SizeSelector = ({ sizes, availableSizes, selectedSize, onSizeChange }) => {
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false)

  
  useEffect(() => {
    if (!selectedSize && sizes && sizes.length > 0) {
      onSizeChange(sizes[0])
    }
  }, [selectedSize, sizes, onSizeChange])

  if (!sizes || sizes.length === 0) {
    return null
  }

  return (
    <div className="size-selector">
      <div className="size-header">
        <h4>Size</h4>
        {sizes.length > 1 && (
          <button className="size-guide-btn" onClick={() => setSizeGuideOpen(true)}>
            Size Guide
          </button>
        )}
      </div>

      <div className="size-options">
        {sizes.map((size) => {
          const isAvailable = availableSizes && availableSizes[size] > 0
          return (
            <button
              key={size}
              className={`size-option ${selectedSize === size ? "selected" : ""} ${!isAvailable ? "out-of-stock" : ""}`}
              onClick={() => isAvailable && onSizeChange(size)}
              disabled={!isAvailable}
            >
              {size}
              {!isAvailable && <span className="out-of-stock-label">Out of stock</span>}
            </button>
          )
        })}
      </div>

      {sizeGuideOpen && (
        <div className="size-guide-modal">
          <div className="size-guide-content">
            <button className="close-btn" onClick={() => setSizeGuideOpen(false)}>
              ×
            </button>
            <h3>Size Guide</h3>
            <div className="size-chart">
              <table>
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest (cm)</th>
                    <th>Waist (cm)</th>
                    <th>Hips (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>S</td>
                    <td>88-93</td>
                    <td>73-78</td>
                    <td>88-93</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>94-99</td>
                    <td>79-84</td>
                    <td>94-99</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>100-105</td>
                    <td>85-90</td>
                    <td>100-105</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>106-111</td>
                    <td>91-96</td>
                    <td>106-111</td>
                  </tr>
                  <tr>
                    <td>XXL</td>
                    <td>112-117</td>
                    <td>97-102</td>
                    <td>112-117</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="size-guide-tips">
              <h4>Measuring Tips</h4>
              <ul>
                <li>
                  <strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape measure
                  horizontal.
                </li>
                <li>
                  <strong>Waist:</strong> Measure around your natural waistline, keeping the tape measure horizontal.
                </li>
                <li>
                  <strong>Hips:</strong> Measure around the fullest part of your hips, keeping the tape measure
                  horizontal.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SizeSelector
