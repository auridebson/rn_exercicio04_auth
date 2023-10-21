import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Logado } from './src/Pages/Logado'

export default function Home(){
    return (

        <View style={Styles.containerTela}>
            <Text style={Styles.containerCabecalho}>
                Meu login
            </Text>

            <View style={Styles.containerCamposLogin}>
                <Text style={Styles.containerTitulos}>Login</Text>
                <TextInput placeholder="Login" style={Styles.container} />
                <Text style={Styles.containerTitulos}>Password</Text>
                <TextInput placeholder="Password" style={Styles.container} />
                <TouchableOpacity 
                    style={Styles.containerButtons}
                    onPress={Logado}
                >
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>

            

        </View>

    )
}

const Styles = StyleSheet.create({
    containerTela: {
        alignItems: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#f8eaea',
        width: '80%',
        padding: 15

    },
    container: {
      backgroundColor: '#dfdbdb',
      alignItems: 'center',
      fontSize: 18,
      width: 150,
      borderRadius: 10,
      padding: 10,
      margin: 10,
      alignContent: 'center',
    },
    containerCabecalho: {
        fontSize:34,
        textAlign: 'center',
        margin: 15
    },
    containerTitulos:{
        fontSize:18,
        margin: 10,
        fontWeight: 'bold'
    },
    containerButtons:{
        width: 150,
        backgroundColor: '#78edf1',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 8,
        fontSize: 14,
        fontWeight: 'bold'


    }
  });