import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import more from "../screens/more";
import best2020 from "../screens/innerpages/best2020";


const Stack= createStackNavigator();

const searchstack =()=>
{
    return(
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name="morbest2020e" component={more} />
            <Stack.Screen name="best2020" component={best2020} />

        </Stack.Navigator>
    )
}

export default searchstack;