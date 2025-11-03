// import Producto from "./producto";
// import { View } from 'react-native';

// export default function ListaProductos({ productos, addToCarrito }) {
//     return (
//         <View className="productos">
//             {productos.map((p) => (<Producto key={p.id} producto={p} addToCarrito={addToCarrito} />))}
//         </View>
//     );
// }


import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Producto from "./producto";

export default function ListaProductos({ productos, addToCarrito }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={productos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Producto producto={item} addToCarrito={addToCarrito} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
});
