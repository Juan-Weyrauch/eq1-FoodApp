import { useState } from "react";

export default function Boton({ guardar, cancelar }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const ingresar = (e) => {
        e.preventDefault();
        if (!name || !price || !stock) return;
        guardar({ name, price: Number(price), stock: Number(stock) });
        setName("");
        setPrice("");
        setStock("");
    };

    return (
        <div className="boton">
            <div className="boton-ingresar">
                <h2>Agregar Producto</h2>
                <form onSubmit={ingresar}>
                    <input
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Precio"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                    <div className="Botones">
                        <button type="submit">Guardar</button>
                        <button type="button" onClick={cancelar}> Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
