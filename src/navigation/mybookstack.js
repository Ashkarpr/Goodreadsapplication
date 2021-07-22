import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import mybooks from "../screens/mybooks";
import readingchallenges from "../screens/innerpages/readingchallenges";
import friends from "../screens/innerpages/friends";
import shelves from "../screens/innerpages/shelves";

const Stack = createStackNavigator();

const mybookstack =({navigation})=>{
    return(
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name="mybooks" component={mybooks}/>
            <Stack.Screen name="readingchallenges" component={readingchallenges}/>
            <Stack.Screen name="friends" component={friends} />
            <Stack.Screen name="shelves" component={shelves}/>
        </Stack.Navigator>
    )
}

export default mybookstack;