import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import home from "../screens/home";
import findfriends from "../screens/innerpages/findfriends";
import notablereaders from "../screens/innerpages/notablereaders";

const Stack = createStackNavigator();

const homestack =({navigation}) =>{
    return(
       
        <Stack.Navigator headerMode={false} >
            <Stack.Screen name="home" component={home}/>
            <Stack.Screen name="findfriends" component={findfriends} />
            <Stack.Screen name="notablereaders" component={notablereaders} />
        </Stack.Navigator>
       
    )
}

export default homestack;