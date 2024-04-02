import { useEffect, useRef, useState } from "react";
import Title from "../../objects/Title";
import "./styles.css";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  let ref = useRef(counter);

  useEffect(() => {
    if (counter >= 15) setCounter(0);
  }, [counter]);

  document.title = "Contador";

  return (
    <article className="counter">
      <Title level={1}>Contador</Title>
      <div className="counter-form">
        <button className="button" onClick={() => setCounter(--counter)}>
          -
        </button>
        <p className="counter-number">{counter}</p>
        <button className="button" onClick={() => setCounter(++counter)}>
          +
        </button>
      </div>

      <button
        className="button"
        onClick={() => {
          setCounter(0);
        }}
      >
        Resetar
      </button>
      <button
        className="button"
        onClick={() => {
          ref.current = counter;
          alert("Você clicou " + ref.current + " vezes!");
        }}
      >
        Clica
      </button>
    </article>
  );
};

export default Counter;
