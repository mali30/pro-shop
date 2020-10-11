import React from 'react'
import PropTypes from 'prop-types';

/*
    This component is for the reviews feature
*/
// color is an optional prop
const Rating = ({value, text, color}) => {
    return (
        <div className='rating'>
            <span>
                {/* we can use inline styles in react with double {{}} */}
                <i style={{color}}
                    className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 
                    'fas fa-star-half-alt' : 'far fa-star' }>
             </i>
            </span>
            <span>
                <i style={{
                    color: color
                }} className= {value >= 2 ? 'fas fa-star' : value >= 1.5 ? 
                    'fas fa-star-half-alt' : 'far fa-star' }>
             </i>
            </span>
            <span>
                <i style={{
                    color: color
                }} className= {value >= 3 ? 'fas fa-star' : value >= 2.5 ? 
                    'fas fa-star-half-alt' : 'far fa-star' }>
             </i>
            </span>
            <span>
                <i style={{
                    color: color
                }} className= {value >= 4 ? 'fas fa-star' : value >= 3.5 ? 
                    'fas fa-star-half-alt' : 'far fa-star' }>
             </i>
            </span>
            <span>
                <i style={{
                    color: color
                }} className= {value >= 5 ? 'fas fa-star' : value >= 4.5 ? 
                    'fas fa-star-half-alt' : 'far fa-star' }>
             </i>
            </span>
            <span> 
                {/* if there's text show it else show nothing */}
                {text && text }
            </span>
        </div>
    )
}

// adding default prop 
// bufix -> the color is not showing. still have black start color
Rating.defualtProps = {
    color: '#f8e825', 
}

// type checking our props
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    // since this optional we won't require it
    color: PropTypes.string
}

export default Rating
