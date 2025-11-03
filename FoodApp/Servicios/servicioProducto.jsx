import productsData from "../data/products.json";

export const getProductos = async () => {
  try {
    return productsData.products;
  } catch (error) {
    console.error("Error en getProductos:", error);
    throw error;
  }
};

export const addProducto = async (producto) => {
  try {
    productsData.products.push(producto);
    return producto;
  } catch (error) {
    console.error("Error en addProducto:", error);
    throw error;
  }
};
