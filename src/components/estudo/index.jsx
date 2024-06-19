import { forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';

export const Home = () => {
  const [contador, setContador] = useState([0, 1, 2, 3, 4]);

  const handleClick = () => {
    setContador((c) => [...c, +c.slice(-1) + 1]);

  };

  useLayoutEffect(() => {
    divRef.current.divRef.scrollTop = divRef.current.scrollHeight;
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
      divRef.current.handleClick();
    };

    useImperativeHandle(ref, () => ({
      handleClick,
      divRef: divRef.current,
    }));

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
//useImperativeHandle te possibilita passar de forma imperativa do componente filho para o componente pai, referencias pela DOM
