import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import discover from "../screens/discover";
import newsandnterviews from "../screens/innerpages/newsandnterviews";
import seemoreposts from  "../screens/innerpages/seemoreposts";
import lists from  "../screens/innerpages/lists";

const Stack = createStackNavigator();

const discoverystack =({navigation})=>{
    return(
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name="discover" component={discover}/>
            <Stack.Screen name="newsandnterviews" component={newsandnterviews}/>
            <Stack.Screen name="seemoreposts" component={seemoreposts}/>
            <Stack.Screen name="lists" component={lists}/>
            
        </Stack.Navigator>
    )
}

export default discoverystack;