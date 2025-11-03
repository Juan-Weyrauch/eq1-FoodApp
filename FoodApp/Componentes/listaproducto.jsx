import Producto from "./producto";
import { View } from 'react-native';

export default function ListaProductos({ productos, addToCarrito }) {
    return (
        <View className="productos">
            {productos.map((p) => (<Producto key={p.id} producto={p} addToCarrito={addToCarrito} />))}
        </View>
    );
}
