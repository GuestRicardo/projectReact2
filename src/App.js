//import logo from './logo.svg';
import P from 'prop-types'
import './App.css';
import { useState, useEffect, React } from 'react';

const Button = React.memo(({ incrementButton }) =>{
  return <button onClick={()=>incrementButton(10)}>aperte aqui!</button>
});
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
const incrementCounter = (num)=>{
  setCounter(counter + num)
};


  return (
    //setState
     // <div className="App">
     //   <header className="App-header">
     //     <img src={logo} className={`App-logo ${ reverseClass }`} alt="logo" />
     //     <h1> Contador: { counters }</h1>
     //     <p>
     //     <button type="button" onClick={ handleClick }>Reverse { reverseClass } </button>
     //     </p>
     //     <p>
     //     <button type="button" onClick={ handleIncrement }>Incrementando { counters } </button>
     //     </p>
     //   </header>
     // </div>
    //---------------fim do setstate-------------------------


    <div className='App'>
        <h1>contador: {counter}</h1>
      {/* Para os exemplos anteriores, nao se aplica ao usecallback o debaixo q e com usecallback */}
      {/* <button onClick={()=> setCounter(counter + 1)}>aperte aqui!</button>*/ }

        <Button incrementButton={incrementCounter}/>
    </div>
    );
}

export default App;
