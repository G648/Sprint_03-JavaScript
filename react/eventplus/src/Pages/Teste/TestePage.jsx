import React, { useState } from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

const TestePage = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [total, setTotal] = useState(0)

    function handleCalcular(e) {
        e.preventDefault();
        setTotal(parseFloat(num1) + parseFloat(num2));
    }

    return (
        <div>
            <h1>
                Página de teste POC's
            </h1>

            <form action="" onSubmit={handleCalcular}>
                <Input
                    type="number"
                    placeholder="Digite o primeiro num"
                    name="num1"
                    id="num1"
                    value={num1}
                    onChange={(e) => { setNum1(e.target.value) }}

                />

                <Input
                    type="number"
                    placeholder="Digite o segundo num"
                    name="num2"
                    id="num2"
                    value={num2}
                    onChange={(e) => { setNum2(e.target.value) }}

                />

                <br />
                <Button
                    textButton="Calcular"
                    type="submit"

                />

                <span>
                    Resultado:
                    <strong id='res'>{total}
                    </strong>
                </span>
            </form>

        </div>
    );
};

export default TestePage;