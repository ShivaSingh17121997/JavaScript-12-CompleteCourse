import React, { useState } from 'react'

export default function StarRating2({ totalStars = 5 }) {

    const [starRating, setStarRating] = useState(0);
    const [hovered, setHovered] = useState(0);
    console.log(starRating)

    const handleClick = (star) => {
        setStarRating(star);
    }
    const handleMouseEnter = (star) => {
        setHovered(star);
    }

    const handleMouseLeave = () => {
        setHovered(0);
    }

    return (
        <div>
            {
                Array.from({ length: totalStars }, (_, i) => {
                    const star = i + 1
                    return <span key={star} style={{ ...styles.star, color: star <= (starRating || hovered) ? "rgb(255, 255, 0)" : 'gray' }}
                        onClick={() => handleClick(star)}
                        onMouseEnter={() => handleMouseEnter(star)}
                        onMouseLeave={handleMouseLeave}


                    >
                        {"\u2605"}
                    </span>
                })
            }

            <span>  rating : {starRating} / {totalStars}</span>
        </div >
    )
}


const styles = {
    star: {
        transition: "color 0.2s",
        fontSize: "50px",

    }
}