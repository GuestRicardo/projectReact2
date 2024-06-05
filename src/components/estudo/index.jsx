import { useState } from 'react';

export const Home = () => {
  const [contador, setContador] = useState([0, 1, 2, 3, 4]);

  const handleClick = () => {
    setContador((c) => [...c, +c.slice(-1) + 1]);
    {
      /* o sinal de +(operador) é praconverter em string) */
    }
  };

  return (
    <>
      <button onClick={handleClick}> Contador {contador.slice(-1)}</button>
      {/* esta pegando o ultimo elemento do array */}
      <div>
        {contador.map((c) => {
          return <p key={`contando -${c}`}>{c}</p>;
        })}
      </div>
    </>
  );
};
