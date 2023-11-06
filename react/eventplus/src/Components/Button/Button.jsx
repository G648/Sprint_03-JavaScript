import React from 'react';

const Button = ({type,textButton}) => {
    return (
   <button type={type} >
       {textButton}
   </button>
    );
};

export default Button;