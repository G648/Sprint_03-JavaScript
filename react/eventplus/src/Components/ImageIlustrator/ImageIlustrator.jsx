import React from 'react';
import './ImageIlustrator.css'
// import imageResource from '../../assets/images/'
import typeEventImage from '../../assets/icons/tipo-evento.svg'
import eventoImage from '../../assets/icons/evento.svg'

const ImageIlustrator = ({ altText, imageName, additionalClass }) => {
    
    let imageResource;

    switch (imageName) {
        case 'tipo-evento':
            imageResource = typeEventImage
            break;
        case 'evento':
            imageResource = eventoImage
        break;
        default:
            break;
    }
    
    return (
        <figure className='illustrator-box'>
            <img
                src={imageResource} 
                alt={altText} 
                className={`illustrator-box__image ${additionalClass}`}
                />
        </figure>
    );
};

export default ImageIlustrator;