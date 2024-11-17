import React, { useState } from "react";
import "../components/Calculadora.css";
export default function Calculadora() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function imputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function operatorHandler(e) {
    var operatorImput = e.target.value;
    setOperator(operatorImput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "÷") setNum(parseFloat(oldnum) / parseFloat(num));
    else if (operator === "×") setNum(parseFloat(oldnum) * parseFloat(num));
    else if (operator === "-") setNum(parseFloat(oldnum) - parseFloat(num));
    else if (operator === "+") setNum(parseFloat(oldnum) + parseFloat(num));
  }

  return (
    <main>
      <section>
        <div className="contain">
          <p>{num}</p>

          <div className="buttons-contain">
            <button className="on-button" onClick={clear}>
              CLEAR
            </button>
            <button onClick={imputNum} value={1}>
              1
            </button>
            <button onClick={imputNum} value={2}>
              2
            </button>
            <button onClick={imputNum} value={3}>
              3
            </button>
            <button className="sinais" onClick={operatorHandler} value="÷">
              ÷
            </button>
            <button onClick={imputNum} value={4}>
              4
            </button>
            <button onClick={imputNum} value={5}>
              5
            </button>
            <button onClick={imputNum} value={6}>
              6
            </button>
            <button className="sinais" onClick={operatorHandler} value="×">
              ×
            </button>
            <button onClick={imputNum} value={7}>
              7
            </button>
            <button onClick={imputNum} value={8}>
              8
            </button>
            <button onClick={imputNum} value={9}>
              9
            </button>
            <button className="sinais" onClick={operatorHandler} value="-">
              -
            </button>
            <button onClick={imputNum} value={0}>
              0
            </button>
            <button className="sinais" onClick={imputNum} value={"."}>
              .
            </button>
            <button className="sinais" onClick={calculate}>
              =
            </button>
            <button className="sinais" onClick={operatorHandler} value="+">
              +
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
