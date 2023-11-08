import React from 'react';
import './VisionSection.css'
import Titulo from '../Titulo/Titulo';

const VisionSection = () => {
    return (
        <section className='vision'>
            <div className='vision__box'>
                <Titulo
                    titleText={"Visão"}
                    color='white'
                    classeAdicional='vision__title'
                />
                
                <p className='vision__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla obcaecati voluptatum quibusdam eum officia id quisquam quaerat alias eius veniam cum perspiciatis blanditiis est omnis, cumque illo incidunt repellat porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis commodi, veniam quaerat, totam minus rerum debitis tempore culpa doloribus placeat eaque aut quas doloremque ipsam error sapiente dolores necessitatibus atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa quod quasi repudiandae, dolor soluta iusto ipsam tenetur repellat. Modi sapiente consequatur omnis. Veritatis, amet placeat! Cupiditate nostrum assumenda totam?</p>
            </div>
            
        </section>
    );
};

export default VisionSection;