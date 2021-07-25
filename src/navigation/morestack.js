import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import More from "../screens/more";
import friends from "../screens/innerpages of more/friends";
import group from "../screens/innerpages of more/group";
import reading from "../screens/innerpages of more/reading";
import give from "../screens/innerpages of more/give";
import toppik from "../screens/innerpages of more/toppik";
import bestbook from "../screens/innerpages of more/bestbook";
import scan from "../screens/innerpages of more/scan";
import settings from "../screens/innerpages of more/settings";
import help from "../screens/innerpages of more/help";
import frnd from "../screens/innerpages of more/frnd";
import profile from "../screens/innerpages of more/profile in";


const Stack = createStackNavigator();

const homestack =({navigation}) =>{
    return(
       
        <Stack.Navigator headerMode={false} >
            <Stack.Screen name="More" component={More}/>
            <Stack.Screen name="Profile" component={profile} />
            <Stack.Screen name="Friends" component={friends} />
            <Stack.Screen name="group" component={group} />
            <Stack.Screen name="reading" component={reading} />
            <Stack.Screen name="give" component={give} />
            <Stack.Screen name="toppik" component={toppik} />
            <Stack.Screen name="bestbook" component={bestbook} />
            <Stack.Screen name="scan" component={scan} />
            <Stack.Screen name="settings" component={settings} />
            <Stack.Screen name="help" component={help} />
            <Stack.Screen name="frnd" component={frnd} />
            

        </Stack.Navigator>
       
    )
}

export default homestack;