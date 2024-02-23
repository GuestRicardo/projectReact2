//import logo from './logo.svg';
import P from 'prop-types'
import './App.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

const Button = ({ incrementButton })=>{
  console.log('filho renderizado')
  return <button onClick={()=>incrementButton(10)}>aperte aqui!</button>
};
Button.propTypes ={
  incrementButton: P.func,
};

function App() {
//setState
//   //useState
//   //para inversao do giro da logo
//   const [reverse, setReverse] = useState(false);
//   const reverseClass = reverse ? 'reverse' : '';
//   const handleClick  = () => {
//     //sem callback
//     //setReverse(!reverse);
//     //com callback
//     setReverse((reverse)=> !reverse);
//   }
//   //----------------------------------------
// //para contar os clicks no button
//   const [counters, setCounters]=useState(0);
//   const handleIncrement = () =>{
//     //com callback
//     setCounters((c) => c+ 1);
//     //sem callback
//     //setCounters(counters + 1);
//   };
  //----------------------fim do state--------------------------
//useEffect
  const[counter, setCounter] = useState(0);
//--------------------------fim do useEfect-----------------
const incrementCounter = useCallback((num)=>{
  setCounter((c)=> c + num)
}, [ ]);

console.log('pAI RENDERIZOU');

const btn = useMemo(() =>{
 return <Button incrementButton={incrementCounter}/>
}, [ incrementCounter ]);

  return (

    <div className='App'>
        <h1>contador: {counter}</h1>
        {btn}
    </div>
    );
}

export default App;


