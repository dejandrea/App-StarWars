import React from "react";
import { Text,View,Image } from "react-native";
import styles from "../../styles";

import imagem from '../../assets/sith.jpg'


export default function TelaTrilogia03(){
    return(
        <View style = { styles.container }>
            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>A história de Rey</Text>

                <Image source={imagem} style={ styles.imagem } />

                <Text style={styles.textos}>Trilogia Sequela. Episódios VII, VIII e IX</Text>

                <Text style={styles.textos}>Enquanto surge uma nova ameaça para a galáxia, Rey, uma catadora de sucata, e Finn, um soldado imperial desertor, devem se juntar a Han Solo e Chewbacca para procurar a única esperança de restaurar a paz na galáxia.</Text>
            </View>
        </View>
    )
}