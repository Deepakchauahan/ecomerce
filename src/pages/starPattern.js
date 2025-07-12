import React, { useState } from 'react'

export default function StarPattern() {
    const [rating, setRating] = useState(0)

    const handleRating = (index) => {
        setRating(index)
    }
    return (
        <>
            <div style={{ display: "flex", margin: 60, justifyContent: "center" }}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} onClick={() => handleRating(index)} onMouseOver={()=>handleRating(index)} className={`${rating >= index ? "active":""}`}>&#x2606;</span>
                ))}
            </div>
            <h3 style={{ display: "flex", margin: 60, justifyContent: "center" }}>Rating:{rating+1}</h3>
        </>

    )
}
