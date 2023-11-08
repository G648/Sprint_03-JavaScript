import React from 'react';
import './ContactSection.css'
import Titulo from '../Titulo/Titulo';
import contatoMap from '../../assets/images/contato-map.png'

const ContactSection = () => {
    return (
        <section className='contato'>
            <Titulo titleText={"Contato"} />

            <div className="contato__endereco-box">
                <img
                    src={contatoMap}
                    alt=""
                    className='contato__img-map'
                />

                <p>
                    Rua niterói, 180 - Centro SCS
                    <br />
                    São Caetano do Sul - SP
                    <br />
                    <a href="tel:+551242254000" className='contato__telefone'>
                        (11) 4225-200
                    </a>
                </p>


            </div>
        </section>
    );
};

export default ContactSection;