import React, {useContext} from "react";
import {CategoriasContext} from "../context/CategoriasContext";

const Formulario = () => {

  const {} = useContext(CategoriasContext);



  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o ingrediente</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingrediente"
          />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="categoria">
            <option value="">--Seleccione Categoría--</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Busca Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
