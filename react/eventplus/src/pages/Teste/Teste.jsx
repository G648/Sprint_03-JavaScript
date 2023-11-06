import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button"
const Teste = () => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function handleCalcular(e) {
        e.preventDefault();
        setTotal(parseFloat(n1) + parseFloat(n2));


    }
    return (
        <div>
            <h1>Página de Poc's</h1>
            <h2>Calculator</h2>

            <form action="" onSubmit={handleCalcular}>
                <Input
                    type="number"
                    placeholder="Primeiro Número"
                    name="n1"
                    id="n1"
                    value={n1}
                    onChange={(e) => { setN1(e.target.value) }}
                />
                <br />
                <Input
                    type="number"
                    placeholder="Segundo Número"
                    name="n2"
                    id="n2"
                    value={n2}
                    onChange={(e) => { setN2(e.target.value) }}
                />

                <br />
                <Button
                    textButton="Calcular"
                    type="submit"
                   
                />

                <span>Resultado: <strong id="res">{total}</strong></span>
  
            </form>
            {/* <p>Valor do N1: {n1}</p>
            <p>Valor do N2: {n2}</p> */}
        </div>
    );
}
export default Teste;