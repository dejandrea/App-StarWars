import React from "react";
import { Text,Image, View } from "react-native";
import styles from "../../styles";

import imagem from '../../assets/darth-vader.jpeg'


export default function TelaTrilogia01(){
    return(
        <View style = { styles.container }>
            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>A história do Darth Vader</Text>

                <Image source={imagem} style={ styles.imagem } />

                <Text style={styles.textos}>Trilogia prequela. Episódios I, II e III</Text>

                <Text style={styles.textos}>Apesar de ter sido criada depois da trilogia original, essa é a primeira trilogia na ordem cronológica da série Star Wars. Nela é contada a história do grande Vilão Darth Vader.</Text>

                <Text style={styles.textos}>Através dessa trilogia você vai saber de onde ele veio e quem ele é.</Text>
            </View>
        </View>
    )
}