import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Login,Register,musicPlayer,mainMenu,mainCrud,CrudUsers,TrackList,EditProfile,PlayListlist,GenreTrackList,Profile} from "../components";


type Pages = {
    Login: undefined,
    Player: undefined,
    Register: undefined,
    MainMenu: undefined,
    MainCrud: undefined,
    CrudUsers: undefined,
    TrackList: undefined,
    EditProfile: undefined,
    PlayListlist:undefined,
    GenretrackList:undefined,
    Profile:undefined
};

const Stack = createNativeStackNavigator<Pages>();

export const StackMenu = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
            }} animation="flip"
            >
            <Stack.Screen name="MainMenu" component={mainMenu}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="CrudUsers" component={CrudUsers} options={{stackPresentation: 'modal'}}/>
            <Stack.Screen name="Register" component={Register}/>
            
            <Stack.Screen name="PlayListlist" component={PlayListlist}/>
            <Stack.Screen name="GenretrackList" component={GenreTrackList}/>
            <Stack.Screen name="EditProfile" component={EditProfile}/>
            <Stack.Screen name="TrackList" component={TrackList}/>
            <Stack.Screen name="Player" component={musicPlayer}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="MainCrud" component={mainCrud} options={{stackPresentation: 'modal'}}/>
            
        </Stack.Navigator>
    )
}
