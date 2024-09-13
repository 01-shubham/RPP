import { useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import "./star.css"

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        console.log(getCurrentIndex);
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) {
        console.log(getCurrentIndex);
        setHover(getCurrentIndex)
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    return (
        <div className="bg-gray-600 h-screen flex items-center justify-center">
            <div className="flex">
                {[...Array(noOfStars)].map((_, index) => {
                    index += 1;
                    return (
                        <FaStar
                            key={index}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            size={40}
                            className={index <= (hover || rating) ? 'active' : 'inactive'}
                        />
                    );
                })}
            </div>
        </div>
    );
};

// PropTypes validation
StarRating.propTypes = {
    noOfStars: PropTypes.number
};

export default StarRating;
