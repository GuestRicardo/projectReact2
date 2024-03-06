import { useContext } from "react";

export const Body = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter }, setContextstate
  } = theContext;
  return (
    <p
      onClick={()=>setContextstate((spred)=>({ ...spred, counter:spred.counter ++}))}
    >
      {body}
    </p>
  );
}
