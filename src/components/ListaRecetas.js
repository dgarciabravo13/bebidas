import React, {useContext} from 'react';
import Receta from "./Receta";
import {RecetasContext} from "../context/RecetasContext";

const ListaRecetas = () => {

  //extraer las recetas 
  const {recetas} = useContext(RecetasContext);

  return ( 
    <div className="row mt-5">
      {recetas.map((receta,i) =>(
        <Receta
          key={i}
          receta={receta}
        />
      ))}
    </div>
    );
}
 
export default ListaRecetas;