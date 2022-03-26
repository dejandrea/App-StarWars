import react from "react";
import { View, Text, Image, Button } from 'react-native'
import styles from "../../styles";
import logo from '../../assets/logo.jpg'

export default function TelaInicial (props){
    return(
        <View style = { styles.container }>
            <Text>Star Wars Ordem Cronológica</Text>
            <Image source={logo} style = { styles.imagem }/>


            <Text style={styles.textos}>Você sabe qual é a ordem Cronológica da franquia Star Wars?</Text>

            <Text style={styles.textos}>Os principais filmes da franquia estão divididos em trilogias. Clique no botão a seguir para conferir.</Text>

            <Button title="Ver 1ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 1") } color="#372d00" />
            <Button title="Ver 2ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 2") } color="#372d00" />
            <Button title="Ver 3ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 3") } color="#372d00" />

        </View>
    )
}