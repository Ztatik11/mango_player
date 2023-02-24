import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Login,musicPlayer } from "../components";


type Pages = {
    Login: undefined,
    Player: undefined
};

const Stack = createNativeStackNavigator<Pages>();

export const StackMenu = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Player" component={musicPlayer}/>
        </Stack.Navigator>
    )
}
