import React from 'react';
import './ImageIlustrator.css'
import imageResource from '../../assets/images/'

import eventoImage from '../../assets/icons/evento.svg'
import defaultImage from '../../assets/images/default-image.jpeg'

const ImageIlustrator = ({ altText, imageName, additionalClass, imageRender = defaultImage}) => {

    let imageResource;

    switch (imageName) {
        case 'tipo-evento':
            imageResource = 'typeEventImage'
            break;
        case 'evento':
            imageResource = 'eventoImage'
            break;
        default:
            imageResource = 'defaultImage'
            break;
    }

    return (
        <figure className='illustrator-box'>
            <img
                src={imageRender}  
                alt={altText}
                className={`illustrator-box__image ${additionalClass}`}
            />
        </figure>
    );
};

export default ImageIlustrator;