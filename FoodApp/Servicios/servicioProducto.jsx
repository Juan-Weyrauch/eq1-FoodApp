const API_URL = "http://localhost:3001/productos";

export const getProductos = async () => {
    const resultado = await fetch(API_URL);
    return await resultado.json();
};

export const addProducto = async (producto) => {
    const resultado = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
    });
    return await resultado.json();
};
