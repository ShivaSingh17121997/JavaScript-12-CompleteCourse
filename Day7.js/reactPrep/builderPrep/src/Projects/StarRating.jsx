import React, { useState } from 'react';

// StarRating Component
const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0); // State for selected rating
    const [hovered, setHovered] = useState(0); // State for hovered star

    // Function to update rating on click
    const handleClick = (star) => {
        setRating(star);
    };

    // Function to handle hover effect
    const handleMouseEnter = (star) => {
        setHovered(star);
    };

    // Function to remove hover effect
    const handleMouseLeave = () => {
        setHovered(0);
    };

    return (
        <div style={styles.starContainer}>
            {Array.from({ length: totalStars }, (_, index) => {
                const star = index + 1;
                return (
                    <span
                        key={star}
                        style={{
                            ...styles.star,
                            color: star <= (hovered || rating) ? '#FFD700' : '#C0C0C0',
                        }}
                        onClick={() => handleClick(star)}
                        onMouseEnter={() => handleMouseEnter(star)}
                        onMouseLeave={handleMouseLeave}
                    >
                        ★
                    </span>
                );
            })}
            <div style={styles.ratingLabel}>Rating: {rating}/{totalStars}</div>
        </div>
    );
};

const styles = {
    starContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        cursor: 'pointer',
    },
    star: {
        fontSize: '30px',
        transition: 'color 0.2s',
    },
    ratingLabel: {
        marginLeft: '10px',
        fontSize: '18px',
        color: '#333',
    },
};

export default StarRating;
