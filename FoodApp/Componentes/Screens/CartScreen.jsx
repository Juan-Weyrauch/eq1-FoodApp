import { View, StyleSheet } from "react-native";
import Carrito from "../carrito.jsx";

export default function CartScreen({ carrito, removeFromCarrito }) {
  return (
    <View style={styles.screen}>
      <Carrito carrito={carrito} removeFromCarrito={removeFromCarrito} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
