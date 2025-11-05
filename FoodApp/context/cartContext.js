import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from "react";
  import { getProductos } from "../Servicios/servicioProducto";
  
  const CartContext = createContext(null);
  
  export function CartProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({}); // { id: cantidad }
    const [userName, setUserName] = useState("");
  
    useEffect(() => {
      getProductos().then(setProducts).catch(console.error);
    }, []);
  
    // Agregar producto al carrito
    const addToCart = (id) => {
      const prod = products.find((p) => p.id === id);
      if (!prod || prod.stock <= 0) return;
  
      // Actualizar stock del producto
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, stock: p.stock - 1 } : p))
      );
  
      // Actualizar carrito
      setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };
  
    // Quitar producto del carrito
    const removeFromCart = (id) => {
      setCart((prev) => {
        const qty = prev[id] || 0;
        if (qty <= 0) return prev;
  
        const next = { ...prev, [id]: qty - 1 };
        if (next[id] === 0) delete next[id];
        return next;
      });
  
      // Devolver stock
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, stock: p.stock + 1 } : p))
      );
    };
  
    // Calcular los ítems del carrito (detalles)
    const cartItems = useMemo(() => {
      return Object.entries(cart).map(([id, qty]) => {
        const p = products.find((x) => x.id === id);
        return { ...p, qty, lineTotal: qty * (p?.price ?? 0) };
      });
    }, [cart, products]);
  
    // Total general
    const total = useMemo(
      () => cartItems.reduce((acc, it) => acc + it.lineTotal, 0),
      [cartItems]
    );
  
    return (
      <CartContext.Provider
        value={{
          products,
          cart,
          addToCart,
          removeFromCart,
          cartItems,
          total,
          userName,
          setUserName,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  }
  
  // Hook personalizado para acceder al contexto
  export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) {
      throw new Error("useCart debe usarse dentro de un <CartProvider>");
    }
    return ctx;
  }
  