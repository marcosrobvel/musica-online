import React from "react";

export const GuitarBassTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Fecha Alta</th>
                    <th>Fecha Baja</th>
                    <th>Proveedor</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.categoria}</td>
                        <td>{item.fecha_alta}</td>
                        <td>{item.fecha_baja}</td>
                        <td>{item.proveedor}</td>
                        <td>{item.precio}</td>
                        <td>{item.stock}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
