import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Login,Register,musicPlayer,mainMenu } from "../components";


type Pages = {
    Login: undefined,
    Player: undefined,
    Register: undefined,
    MainMenu: undefined
};

const Stack = createNativeStackNavigator<Pages>();

export const StackMenu = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Player" component={musicPlayer}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="MainMenu" component={mainMenu}/>
        </Stack.Navigator>
    )
}
