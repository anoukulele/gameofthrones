import React from 'react';

const img_style = {
    width: '50px',
    height: '50px'
}
    
    const Card = ({episode}) => {
        
        const {name, image, number, season } = episode;
        let {summary} =episode;
        summary = summary.slice(3, summary.length-4);
        return (
            <div>
            <p>{name}</p>
            <img alt = {''} src = {image.medium}/>
            <p>{number}</p>
            <p>{season}</p>
            <p>{summary}</p>
            </div>
        )
    }
    export default Card; 