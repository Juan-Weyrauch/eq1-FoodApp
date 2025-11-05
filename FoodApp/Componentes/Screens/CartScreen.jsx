import { View, StyleSheet } from "react-native";
import Carrito from "../carrito.jsx";
import { useCart } from "../../context/cartContext";

export default function CartScreen() {
  const { cartItems, removeFromCart, total } = useCart();

  return (
    <View style={styles.screen}>
      <Carrito
        carrito={cartItems}
        total={total}
        removeFromCarrito={removeFromCart}
      />
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
