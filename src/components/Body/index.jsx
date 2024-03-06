import { useContext } from "react";
import { GlobalContext } from "../../context/AppContext";

export const Body = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter }, setState
  } = theContext;
  return (
    <p
      onClick={()=>setState((spred)=>({ ...spred, counter:spred.counter ++}))}
    >
      {body}
    </p>
  );
}
