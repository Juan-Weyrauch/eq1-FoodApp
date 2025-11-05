import { View, ScrollView, Button, Text, StyleSheet } from "react-native";
import ListaProductos from "../listaproducto";
import Boton from "../boton";
import { useCart } from "../../context/cartContext";

export default function HomeScreen() {
  const { products, addToCart } = useCart(); 

  return (
    <View style={styles.screen}>
      <Text style={styles.h1}>🍴 Menú de Productos</Text>
      <View style={styles.card}>
        <ScrollView contentContainerStyle={styles.listContent}>
          <ListaProductos productos={products} addToCarrito={addToCart} />
        </ScrollView>
      </View>
      <View style={styles.cta}>
        <Button title="AGREGAR NUEVA COMIDA" onPress={() => setBoton(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111",      
    padding: 16,
  },
  h1: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginVertical: 12,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  listContent: {
    paddingBottom: 24,
  },
  cta: {
    marginTop: 12,
  },
});
