import React from 'react';
import { View,Text,Image, } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons"; 

import home from "../screens/home";
import mybooks from "../screens/mybooks";
import discover from "../screens/discover";
import search from "../screens/search";
import more from "../screens/more";


const Tab = createBottomTabNavigator ();

const Tabs =()=>
{
    return(
        <Tab.Navigator tabBarOptions={{
            showLabel:false,
            style:{backgroundColor:"#fdf5e6",
                  position:"absolute",
                  width:"100%",
                 
                 }}} >


            <Tab.Screen name= "Home" component={home} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent:"center",}}>
                      <MaterialIcons  name="home" size={30} style={{color:focused ? "black" : "gray" }} />
                        <Text style={{fontSize:10 , color:focused ? "black" : "gray"}}>Home</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name= "MY BOOKS" component={mybooks}options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent:"center",}}>
                      <MaterialCommunityIcons name="book-multiple" size={28} style={{color:focused ? "black" : "gray" }} />
                        <Text style={{fontSize:10 , color:focused ? "black" : "gray"}}>My Books</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name= "DISCOVER" component={discover} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent:"center",}}>
                      <MaterialCommunityIcons name="compass-outline" size={28} style={{color:focused ? "black" : "gray" }} />
                        <Text style={{fontSize:10 , color:focused ? "black" : "gray"}}>Discover</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name= "SEARCH" component={search} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent:"center",}}>
                       <Ionicons name="search-sharp" size={28} style={{color:focused ? "black" : "gray" }} />
                        <Text style={{fontSize:10 , color:focused ? "black" : "gray"}}>Search</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name= "MORE" component={more}  options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent:"center",}}>
                      <Ionicons name="menu-outline" size={28} style={{color:focused ? "black" : "gray" }} />
                        <Text style={{fontSize:10 , color:focused ? "black" : "gray"}}>More</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default Tabs;