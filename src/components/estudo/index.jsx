import { forwardRef, useLayoutEffect, useRef, useState } from 'react';

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
      <DisplayCounted counted={contador} ref={divRef} />
    </>
  );
};
//elemento separado(componente)
export const DisplayCounted = forwardRef(
  function DisplayCounted({ contador }, divRef) {

    const [rend, setRand] = useState('0.123')
    const rendleClick = () => {
      setRand(Math.random().toFixed(2));
    }
    return (
      <div ref={divRef}>
        {contador.map((c) => {
          return (
            <p>
              return <p key={`contando -${c}`}>{c} +++{rand}</p>;
            </p>
          );
        })}
      </div>
    );
  };
);
//uma tag no jsx aceita passar um elemento diretamente do DOM usando ref (exemplo: <div ref={divRef}>)
//ref e uma propriedade especial do react q serve para referenciar algo da DOM
