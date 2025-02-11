import React from 'react'
import { useContext } from 'react';
import ThemeContext from './ThemeContext'

function Spinner() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="loading-screen" style={isDarkMode ? { backgroundColor: "#1f1f1f" } : { backgroundColor: "#faf9f9" }}>
      <div className="spinner center">
        <div className="loader"></div>
      </div>
    </div>
  )
}

export default Spinner