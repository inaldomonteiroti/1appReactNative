import React from "react";
import { Text } from "react-native";
import { View, Image, StyleSheet } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";

import Texto from "../../componentes/Texto";


export default function Detalhes({nome, logoFazenda, nomeFazenda,descricao,preco, botao}){
    return <>
    <Text style={estilos.nome}> {nome}</Text>
    <View style={estilos.fazenda}>
    <Image source={logoFazenda} style={estilos.imagemFazenda}></Image>
    <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text> 
    </View>
    
    <Texto style={estilos.descricao}>{descricao}</Texto>
    <Text style={estilos.preco}>{preco}</Text>
    {/* <Button title={botao}></Button> */}
    <TouchableOpacity style={estilos.botao} onPress={()=>{}}>
        <Texto style={estilos.textoBotao}>{botao}</Texto>
    </TouchableOpacity>
    </>

}

    const estilos = StyleSheet.create({

        nome:{
            color: "#464646",
            fontSize:26,
            lineHeight:42,
            fontWeight:"bold"
            
        },
        imagemFazenda:{
            width: 32,
            height: 32
        },
        fazenda:{
            flexDirection: "row",
            paddingVertical: 12,
            marginLeft:12
        },
        nomeFazenda:{
           fontSize: 16,
           lineHeight: 26,
        },
        descricao:{
            color: "#A3A3A3",
            fontSize: 16,
            lineHeight: 26
        },
        preco:{
            color: "#2A9F85",
            fontWeight: "bold",
            fontSize: 26,
            lineHeight: 42,
            marginTop: 8,        
            fontWeight:"bold"
        },
        botao:{
            marginTop:16,
            backgroundColor: "#2A9F85",
            paddingVertical: 16,
            borderRadius:6,

        },
        textoBotao:{
            textAlign: "center",
            color: "#ffffff",
            fontSize: 16,
            lineHeight: 26,
            fontWeight: "bold"
        },
    })

