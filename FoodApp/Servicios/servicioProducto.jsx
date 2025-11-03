const API_URL = "http://192.168.0.105:3001/productos";

export const getProductos = async () => {
    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) {
            throw new Error("Error al obtener los productos");
        }
        return await respuesta.json();
    } catch (error) {
        console.error("Error en getProductos:", error);
        throw error;
    }
};

export const addProducto = async (producto) => {
    try {
        const respuesta = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(producto),
        });

        if (!respuesta.ok) {
            throw new Error("Error al agregar el producto");
        }

        return await respuesta.json();
    } catch (error) {
        console.error("Error en addProducto:", error);
        throw error;
    }
};
