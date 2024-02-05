import React from 'react';

const MovieCard = ({ title, description, poster,rating}) =>{
    return (
        <div className='movie-card'>
            {/* <img src= {image} alt={title} /> */}
            <img src={poster} alt= {title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Rating:{rating}</p>
        </div>
    )
}


export default MovieCard;