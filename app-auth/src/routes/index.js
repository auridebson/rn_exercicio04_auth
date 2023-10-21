import { createNativeStackNavigator } from '@react-navigation/stack'
import Home from '../Pages/Home'
import Logado from '../Pages/Logado'

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Logado"
                component={Logado}
            />
        </Stack.Navigator>
    )
}