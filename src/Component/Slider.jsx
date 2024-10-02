import React, { useState } from 'react'
import "../App.css";

const Slider = ({min, max, step, title, value}) => {

  return (
    <div className='container slider-container'>
        <p>{title}</p>
        <input className="w-2/4" type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(e.target.value)} />
        <p>{value}</p>
    </div>
  )
}

export default Slider;