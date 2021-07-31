import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import search from "../screens/search";
import art from "../screens/innerpages/art";
import biography from "../screens/innerpages/biography";
import business from "../screens/innerpages/business";
import chick_lit from "../screens/innerpages/chick_lit";
import childrens from "../screens/innerpages/childrens";
import christians from "../screens/innerpages/christians";
import classic from "../screens/innerpages/classic";
import comics from "../screens/innerpages/comics";


const Stack= createStackNavigator();

const searchstack =()=>
{
    return(
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name="search" component={search} />
            <Stack.Screen name="art" component={art} />
            <Stack.Screen name="biography" component={biography} />
            <Stack.Screen name="business" component={business} />
            <Stack.Screen name="chick_lit" component={chick_lit} />
            <Stack.Screen name="childrens" component={childrens} />
            <Stack.Screen name="christians" component={christians} />
            <Stack.Screen name="classic" component={classic} />
            <Stack.Screen name="comics" component={comics} />
        </Stack.Navigator>
    )
}

export default searchstack;