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
                style={styles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Precio"
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
            />
            <TextInput
                style={styles.input}
                placeholder="Stock"
                keyboardType="numeric"
                value={stock}
                onChangeText={setStock}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonGuardar} onPress={ingresar}>
                    <Text style={styles.buttonText}>Guardar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCancelar} onPress={cancelar}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
    },
    buttonGuardar: {
        backgroundColor: "grenn",
        padding: 10,
        borderRadius: 8,
        minWidth: 100,
        alignItems: "center",
    },
    buttonCancelar: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 8,
        minWidth: 100,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});
