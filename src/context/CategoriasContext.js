import React, {createContext, useState, useEffect} from 'react';

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {

  const [categorias, guardarCategorias] = useState([]);

  useEffect(()=>{

  },[]);

  return ( 
    <CategoriasContext.Provider
      value={{}}
    >
      {props.children}
    </CategoriasContext.Provider>
   );
}
 
export default CategoriasProvider;