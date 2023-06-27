import React from "react"
import {Text} from "react-native"
import { StyleSheet } from "react-native"

export default function Texto({children, style}){
    let estilo = estilos.texto;

    if (style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style,estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily:"Inter-Thin",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily:"Inter-Black",
        fontWeight: "normal"
    }
})