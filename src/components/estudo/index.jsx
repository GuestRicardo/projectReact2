import { useState, useRef, useState } from 'react';

export const Home = () => {
  const [contador, setContador] = useState([0, 1, 2, 3, 4]);

  const handleClick = () => {
    setContador((c) => [...c, +c.slice(-1) + 1]);
    //divRef é a referencia da div q esta na home
    const divRef = useRef();
    {
      /* o sinal de +(operador) é praconverter em string) */
    }
  };

  /**Este useEffect é responsavel, para toda vez que atulaizar a pagina será carregado o scrool sempre encima, no inicio, para evitar de iniciar com scroll no meio */
  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  return (
    <>
      <button onClick={handleClick}> Contador {contador.slice(-1)}</button>
      {/* esta pegando o ultimo elemento do array */}
      <div ref={ divRef }>
        {contador.map((c) => {
          return <p key={`contando -${c}`}>{c}</p>;
        })}
      </div>
    </>
  );
};
