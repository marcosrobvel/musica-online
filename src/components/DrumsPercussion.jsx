import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from '../data/bateriasypercusion'
import { setDatos } from "../features/DrumsPercussionSlice";

export const DrumsPercussion = () => {
  const dispatch = useDispatch();
  const datosTabla = useSelector(state => state.drums.datos);

  useEffect(() => {
    dispatch(setDatos(data));
  }, [dispatch]);

  return (
    <div>
      <h1>Drums y Percusión</h1>
      {datosTabla.length === 0 ? (
        <p>Cargando datos...</p>
      ) : (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Fecha Alta</th>
              <th>Fecha Baja</th>
              <th>Proveedor</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {datosTabla.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.categoria}</td>
                <td>{item.fecha_alta}</td>
                <td>{item.fecha_baja || "-"}</td>
                <td>{item.proveedor}</td>
                <td>{item.precio}</td>
                <td>{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
