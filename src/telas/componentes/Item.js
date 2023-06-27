import React from "react";
import Texto from "../../componentes/Texto";
import { View } from "react-native";
import { Image, StyleSheet , FlatList } from "react-native";

export default function Itens({item: {nome, imagem}}){

   return ( <View style={estilos.item}>
    <Image source={imagem} style={estilos.imagem}></Image>
    <Texto style={estilos.nome}>{nome}</Texto>    
</View>)}


    

    {/* {lista.map(({nome, imagem})=>{
        return <View style={estilos.item}>
            <Image source={imagem} style={estilos.imagem}></Image>
            <Texto style={estilos.nome} key={nome}>{nome}</Texto>
            
        </View>
    })} */}

const estilos = StyleSheet.create({
    
    item:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
       
      
    },
    imagem:{
        width:46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})