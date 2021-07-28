import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import discover from "../screens/discover";
import newsandnterviews from "../screens/innerpages/newsandnterviews";
import seemoreposts from  "../screens/innerpages/seemoreposts";
import lists from  "../screens/innerpages/lists";
import bestbooksever from  "../screens/innerpages/bestbooksever";
import booksthateveryoneread from  "../screens/innerpages/booksthateveryoneread";
import bestgkbooks from  "../screens/innerpages/bestgkbooks";
import best20th from  "../screens/innerpages/best20th";
import booksforkids from  "../screens/innerpages/booksforkids";

const Stack = createStackNavigator();

const discoverystack =({navigation})=>{
    return(
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name="discover" component={discover}/>
            <Stack.Screen name="newsandnterviews" component={newsandnterviews}/>
            <Stack.Screen name="seemoreposts" component={seemoreposts}/>
            <Stack.Screen name="lists" component={lists}/>
            <Stack.Screen name="bestbooksever" component={bestbooksever}/>
            <Stack.Screen name="booksthateveryoneread" component={booksthateveryoneread}/>
            <Stack.Screen name="bestgkbooks" component={bestgkbooks}/>
            <Stack.Screen name="best20th" component={best20th}/>
            <Stack.Screen name="booksforkids" component={booksforkids}/>
        </Stack.Navigator>
    )
}

export default discoverystack;