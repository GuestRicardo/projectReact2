import { useLayoutEffect, useRef, useState } from 'react';

export const Home = () => {
  const [contador, setContador] = useState([0, 1, 2, 3, 4]);

  const handleClick = () => {
    setContador((c) => [...c, +c.slice(-1) + 1]);
    //divRef é a referencia da div q esta no return com o scroll
    //entao ela esta referenciando diretamente do DOM
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const divRef = useRef();
    {
      /* o sinal de +(operador) é praconverter em string) */
    }
  };

  /**Este useLayoutEffect executará o codigo somente quando o navegador carregar na tela,
   *  ele renderizara as coisas junto com o DOM ele vai esperar o DOM ser atualizado*/
  useLayoutEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  return (
    <>
      <button onClick={handleClick}> Contador {contador.slice(-1)}</button>
    </>
  );
};
//elemento separado
export const DisplayCounted = () => {
  {
    /* esta pegando o ultimo elemento do array */
  }
  <div ref={divRef}>
    {contador.map((c) => {
      return <p key={`contando -${c}`}>{c}</p>;
    })}
  </div>;
};
//uma tag no jsx aceita passar um elemento diretamente do DOM usando ref (exemplo: <div ref={divRef}>)
