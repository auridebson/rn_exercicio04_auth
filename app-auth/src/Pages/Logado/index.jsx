import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Logado(){
    return (

        <View style={Styles.containerTela}>
            <Text style={Styles.containerCabecalho}>
                Minha página de detalhes
            </Text>
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
    containerCabecalho:{
        fontSize: 24
    }
}
)