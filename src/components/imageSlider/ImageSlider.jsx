import React, { useState } from 'react'

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    

    const slideStyle = {
        width:'100%',
        height:'100%',
        borderRadius:'10px',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage:`url(${slides[currentIndex].url})`
    }
  return (
    <div style={{height:'100%', position:'relative'}}>
    <div style={slideStyle}> </div>
    </div>
  )
}

export default ImageSlider