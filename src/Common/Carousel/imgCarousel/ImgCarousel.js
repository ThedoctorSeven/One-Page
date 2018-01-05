import React, { Component } from 'react';

const ImgCarousel = ({ className = 'legend', alt, src, legend }) => {
    return (
        <div>
            <img alt={alt} src={src} />
            <p className={className}>{legend}</p>
        </div>
    );

}

export default ImgCarousel;
