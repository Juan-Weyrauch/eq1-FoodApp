import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Boton({ guardar, cancelar }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const ingresar = () => {
    if (!name || !price || !stock) return;
    guardar({ name, price: Number(price), stock: Number(stock) });
    setName("");
    setPrice("");
    setStock("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Producto</Text>

      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Stock"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={ingresar}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={cancelar}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 6,
    flex: 1,
    marginRight: 6,
  },
  cancelButton: {
    backgroundColor: "#F44336",
    padding: 10,
    borderRadius: 6,
    flex: 1,
    marginLeft: 6,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
