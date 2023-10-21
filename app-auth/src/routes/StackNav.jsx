import { createStackNavigator } from "@react-navigation/native-stack";
import { Logado } from "../Pages/Logado"
import { Home } from "../Pages/Home"

const { Navigator, Screen } = createStackNavigator()

export function StackNav() {
    return (
        <Navigator>
            <Screen name="Home" component={Home} />
            <Screen name="Logado" component={Logado} />
        </Navigator>
    )
}