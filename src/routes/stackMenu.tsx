import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Login,Register,musicPlayer,mainMenu,mainCrud, CrudUsers } from "../components";


type Pages = {
    Login: undefined,
    Player: undefined,
    Register: undefined,
    MainMenu: undefined,
    MainCrud: undefined,
    CrudUsers: undefined,
};

const Stack = createNativeStackNavigator<Pages>();

export const StackMenu = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
            }} animation="flip"
            >
            <Stack.Screen name="Player" component={musicPlayer}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="MainMenu" component={mainMenu}/>
            <Stack.Screen name="MainCrud" component={mainCrud} options={{stackPresentation: 'modal'}}/>
            <Stack.Screen name="CrudUsers" component={CrudUsers} options={{stackPresentation: 'modal'}}/>
        </Stack.Navigator>
    )
}
