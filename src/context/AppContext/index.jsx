import { createContext, useState } from "react";
import { globalState } from "./data";

export const GlobalContext = createContext();

//lembrando q esse componente sera usado para manipular o estado
//todo componente react que tem corpo é chamado por padrão de children
// eslint-disable-next-line
export const AppContext = (props) => {
  const [ContextState, setState] = useState(globalState);

  return <GlobalContext.Provider value={ { ContextState, setState } }>
    {/* eslint-disable-next-line */}
    {props.children}
  </GlobalContext.Provider>
};

