import React from "react";

export default function Carrito({ carrito, removeFromCarrito }) {
    const total = carrito.reduce((a, i) => a + i.price * i.q, 0);

    return (
        <div className="carrito">
            <h2>Cuenta</h2>
            <div id="carItems">
                {carrito.length === 0 ? <p>Carrito vacío</p> :
                    carrito.map((item) => (
                        <div key={item.id} className="car-item">
                            <span>{item.name} x {item.q}</span>
                            <span>${item.price * item.q}</span>
                            <button className="remove" onClick={() => removeFromCarrito(item.id)}>❌</button>
                        </div>
                    ))}
            </div>
            <h3 id="total">Total: ${total}</h3>
        </div>
    );
}

