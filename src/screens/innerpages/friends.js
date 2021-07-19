import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView, Touchable} from 'react-native';
import { Divider } from 'react-native-paper';
import * as Progress from 'react-native-progress';

const home = ({navigation})=>
{
  return(
   
    <ScrollView style={{width:"100%",backgroundColor:"white"}}>
    <View style={{flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center",width:"100%",}}>
      <View style={{...style.shadow,width:"100%",backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
        <View style={{marginTop:-10,flexDirection:"row", width:"100%",height:90,backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
        <TouchableOpacity  onPress={() => {navigation.navigate('mybooks')}}>
          <AntDesign name="arrowleft" size={22} color="black" style={{}} />
        </TouchableOpacity>
          <View style={{marginLeft:"5%",paddingLeft:"1%",alignItems:"center",flexDirection:"row",backgroundColor:"white",height:40,width:"70%",borderRadius:30}}>
            <Ionicons name="search" style={{fontSize:20,color:"gray"}}/>
            <TextInput placeholder="Title, author, or ISBN" style={{width:"80%",fontSize:15,position:"absolute",marginLeft:"10%"}}/>
            <TouchableOpacity style={{position:"absolute",right:0}}>
              <SimpleLineIcons name="camera" style={{color:"black",fontSize:20,right:"40%"}}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{position:"absolute",right:"7%"}}>
          <SimpleLineIcons name="bell" style={{fontSize:24}}/>
          </TouchableOpacity>
        </View>
        <View style={{width:"100%"}}>
         <View style={{flexDirection:"row",width:"100%",}}>
         <TouchableOpacity onPress={() => {navigation.navigate('readingchallenges')}} style={{alignItems:"flex-start",marginLeft:"20%"}} >
          <Text style={{}} >YOUR CHALLENGE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:"8%"}}>
          <Text  >FRIENDS</Text>
          <Divider  style={{backgroundColor:"green",marginTop:"3%",width:"105%",height:2}} />
          </TouchableOpacity>
        </View>
      </View>
     </View>

     {/* ........2nd portion........ */}

     <View style={{flexDirection:"row",backgroundColor:"#c478c3",width:"100%",justifyContent:"flex-start",alignItems:"center",height:100}}>
      <Image source={require("../../assets/bookv.jpg")} style={{marginLeft:"10%",}} resizeMode="contain" />
      <Text style={{textAlign:"left",fontWeight:"bold",fontSize:25,marginTop:-10,color:"white"}}>2021 READING{"\n"}CHALLENGE</Text>
     </View>
    
          <View style={{width:"100%",alignItems:"center",marginTop:"20%"}}>
            <Text style={{textAlign:"center"}} >
             None of your friends have started this challenge.
            </Text>
        </View>
    </View>
    </ScrollView>
    
  )
}
 
const style=StyleSheet.create({
  shadow:{
    shadowColor:"black",
    shadowOffset :{
      width:1,
      height:5
    },
    shadowOpacity:0.50,
    shadowRadius:10,
    elevation:20
  }
})

export default home;