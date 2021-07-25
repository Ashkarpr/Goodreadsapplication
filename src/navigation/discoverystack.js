import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import discover from "../screens/discover";
import newsandnterviews from "../screens/innerpages/newsandnterviews";
import seemoreposts from  "../screens/innerpages/seemoreposts";

const Stack = createStackNavigator();

const discoverystack =({navigation})=>{
    return(
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name="discover" component={discover}/>
            <Stack.Screen name="newsandnterviews" component={newsandnterviews}/>
            <Stack.Screen name="seemoreposts" component={seemoreposts}/>
            
        </Stack.Navigator>
    )
}

export default discoverystack;