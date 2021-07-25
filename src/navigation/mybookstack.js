import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import mybooks from "../screens/mybooks";
import readingchallenges from "../screens/innerpages/readingchallenges";
import friends from "../screens/innerpages/friends";
import shelves from "../screens/innerpages/shelves";
import read from "../screens/innerpages/read";
import Currentlyreading from "../screens/innerpages/currentlyreading";
import wanttoread from "../screens/innerpages/wanttoread";
import Kindle from "../screens/innerpages/Kindle";
import edityourfavpage from "../screens/innerpages/edityourfavpage";

const Stack = createStackNavigator();

const mybookstack =({navigation})=>{
    return(
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name="mybooks" component={mybooks}/>
            <Stack.Screen name="readingchallenges" component={readingchallenges}/>
            <Stack.Screen name="friends" component={friends} />
            <Stack.Screen name="shelves" component={shelves}/>
            <Stack.Screen name="read" component={read}/>
            <Stack.Screen name="Currentlyreading" component={Currentlyreading}/>
            <Stack.Screen name="wanttoread" component={wanttoread}/>
            <Stack.Screen name="kindle" component={Kindle}/>
            <Stack.Screen name="edityourfavpage" component={edityourfavpage}/>
        </Stack.Navigator>
    )
}

export default mybookstack;