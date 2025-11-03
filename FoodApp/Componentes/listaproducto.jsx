import React from "react";
import Producto from "./producto";

export default function ListaProductos({ productos, addToCarrito }) {
    return (
        <div className="productos">
            {productos.map((p) => (<Producto key={p.id} producto={p} addToCarrito={addToCarrito} />))}
        </div>
    );
}
