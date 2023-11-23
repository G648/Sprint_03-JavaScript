import React from 'react';
import './ImageIlustrator.css'
import imageResource from '../../Assets/icons/tipo-evento.svg'

import eventoImage from '../../Assets/icons/evento.svg'
import defaultImage from '../../Assets/images/default-image.jpeg'

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