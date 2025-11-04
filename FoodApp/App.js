import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import HomeScreen from "./Componentes/Screens/HomeScreen.jsx";
import CartScreen from "./Componentes/Screens/CartScreen.jsx";
import { addProducto, getProductos } from "./Servicios/servicioProducto";

const Stack = createNativeStackNavigator();

export default function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [boton, setBoton] = useState(false);

  useEffect(() => {
    getProductos().then(setProductos);
  }, []);

  const addToCarrito = (id) => {
    const producto = productos.find((p) => p.id === id);
    if (!producto || producto.stock === 0) return;

    setProductos((prev) =>
      prev.map((p) =>
        p.id === id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p
      )
    );

    setCarrito((prev) => {
      const buscar = prev.find((item) => item.id === id);
      if (buscar) {
        return prev.map((item) =>
          item.id === id ? { ...item, q: item.q + 1 } : item
        );
      }
      return [
        ...prev,
        { id: producto.id, name: producto.name, price: producto.price, q: 1 },
      ];
    });
  };

  const removeFromCarrito = (id) => {
    const item = carrito.find((i) => i.id === id);
    if (!item) return;

    setProductos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: p.stock + item.q } : p))
    );
    setCarrito((prev) => prev.filter((i) => i.id !== id));
  };

  const botonAgregarProducto = async (nuevoProducto) => {
    const productoCreado = await addProducto(nuevoProducto);
    setProductos((prev) => [...prev, productoCreado]);
    setBoton(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={({ navigation }) => ({
            title: "Home",
            headerStyle: { backgroundColor: "red" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerRight: () => (
              <Button 
                style={styles.Button}
                title="🛒"
                onPress={() => navigation.navigate("Cart")}
              />
            ),
          })}
        >
          {() => (
            <HomeScreen
              productos={productos}
              addToCarrito={addToCarrito}
              boton={boton}
              setBoton={setBoton}
              botonAgregarProducto={botonAgregarProducto}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Cart"
          options={{ title: "Carrito" }}
        >
          {() => (
            <CartScreen
              carrito={carrito}
              removeFromCarrito={removeFromCarrito}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "transparent",
  }
})