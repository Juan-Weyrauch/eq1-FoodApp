import React from "react";

export default function Producto({ producto, addToCarrito }) {
    return (
        <div className={`producto ${producto.stock === 0 ? "disabled" : ""}`} onClick={() => producto.stock > 0 && addToCarrito(producto.id)}>
            <div style={{ fontSize: "2rem" }}>{producto.name}</div>
            <div>{producto.stock > 0 ? producto.stock : "No stock"}</div>
        </div>
    );
}
