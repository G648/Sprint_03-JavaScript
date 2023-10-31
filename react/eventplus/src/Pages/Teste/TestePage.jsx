import React, { useState } from 'react';
import Input from '../../Components/Input/Input';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';

const TestePage = () => {

    const [num1, setNum1] = useState(0); 
    const [num2, setNum2] = useState(0); 

    return (
        <div>
            <h1>
                Página de teste POC's
            </h1>

            <Header />

            <form action="">
                <Input 
                type="number" 
                placeholder="Digite o primeiro num" 
                name="num1" 
                id="num1" 
                value={num1}
                onChange={(e) => {setNum1(e.target.value)}}

                />

                <Input 
                type="number" 
                placeholder="Digite o segundo num" 
                name="num2"
                id="num2" 
                value={num2}
                onChange={(e) => {setNum2(e.target.value)}}

                />

                <br />
                <span> <Button textButton="Calcular" /> </span>
            </form>

        </div>
    );
};

export default TestePage;