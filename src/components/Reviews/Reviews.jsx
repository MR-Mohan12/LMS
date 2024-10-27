
import { useState } from 'react';
import './Reviews.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const [currentSlide, setCurrentSlide] = useState(0); 

    const reviews = [
        { name: 'John Doe', review: 'This is an amazing product! Highly recommended.' },
        { name: 'Jane Smith', review: 'I love using this. It made my life so much easier.' },
        { name: 'Sam Wilson', review: 'Fantastic experience! Will definitely buy again.' },
        { name: 'Sara Lee', review: 'Very satisfied with the quality and service.' },
        { name: 'Tom Brown', review: 'Exceeded my expectations! Great value for money.' },
        { name: 'Lisa White', review: 'Simply the best. Excellent results every time.' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        customPaging: (i) => {
            return (
                <div
                    style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: currentSlide === i ? '#00bcd4' : '#ddd', 
                        margin: '0 5px',
                        transition: 'background-color 0.3s ease',
                    }}
                />
            );
        },
        appendDots: (dots) => (
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <ul style={{ display: 'flex', margin: '0', padding: '0' }}>{dots}</ul>
            </div>
        ),
        afterChange: (current) => {
            setCurrentSlide(current);
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="reviews-carousel">
            <h1>Customer Reviews</h1>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <div className="review-content">
                            <h2>{review.name}</h2>
                            <p>{review.review}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Reviews;
