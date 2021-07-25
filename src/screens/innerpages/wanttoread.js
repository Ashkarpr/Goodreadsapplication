import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-paper';

const home = ({navigation})=>
{
  return(
   
    <View style={{flex:1,backgroundColor:"white",alignItems:"center",width:"100%"}}>
        <View style={{...style.shadow,flexDirection:"row", width:"100%",height:70,backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
          <View style={{padding:5,alignItems:"center",flexDirection:"row",height:40,width:"85%",borderRadius:30}}>
           <TouchableOpacity onPress={() => {navigation.navigate('mybooks')}}>
            <AntDesign name="arrowleft" size={30} color="gray" style={{}} />
            </TouchableOpacity>
            <Text style={{position:"absolute",left:"17%",fontSize:17}}> 
              Want to Read
            </Text>
           
          </View>
        </View>

        <View style={{...style.shadow,marginTop:"1%",flexDirection:"row",alignItems:"center",backgroundColor:"white",paddingLeft:"5%",width:"100%",height:45}}>
          <Text style={{fontSize:16}}>
            Sorted by
          </Text>
          <TouchableOpacity>
            <Text style={{color:"green",fontSize:16}}>
              {" "}Date Updated
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:"row",position:"absolute",right:"2%"}}>
          <Ionicons name="ios-arrow-up-sharp" style={{fontSize:17}}/> 
          <Ionicons name="ios-arrow-down-sharp" style={{right:"50%",marginTop:"10%",fontSize:17}}/> 
          </TouchableOpacity>
        </View>

        
        <View style={{alignSelf:"flex-start",marginLeft:"5%",marginTop:"3%",width:"100%"}}>
           <TouchableOpacity  style={{alignItems:"center",marginTop:"3%",flexDirection:"row"}}>  
            <Image source={require("../../assets/powerofhabit.jpg")} style={{resizeMode:"contain",}}/>
            <Text style={{position:"absolute",fontWeight:"bold",marginBottom:"40%",left:"27%"}}>
              The Power of Habit: Why we do{"\n"}
              What We Do in Life and Business
            </Text>
            <Text style={{position:"absolute",left:"27%",top:"32%"}}>
              by Charles Duhigg
            </Text>

            <Entypo name="star" size={17} color="red" style={{marginLeft:"7%",marginTop:"3%"}} />
            <Entypo name="star" size={17} color="red" style={{marginTop:"3%"}} />
            <Entypo name="star" size={17} color="red" style={{marginTop:"3%"}} />
            <Entypo name="star" size={17} color="red" style={{marginTop:"3%"}} />
            <Entypo name="star" size={17} color="gray" style={{marginTop:"3%"}} />
            <Text style={{marginLeft:"1%",marginTop:"3%"}}>
              4.11  .
            </Text>
            <Text style={{position:"absolute",top:"60%",left:"28%"}}>
              392,058 ratings{"\n"}
              First published 28 February 2012{"\n"}
              375 pages
            </Text>
            <Text style={{fontWeight:"bold",position:"absolute",left:"28%",top:"100%"}}>
              Last updated 10 July 2021
            </Text>
            </TouchableOpacity>
           </View>
         
        
    </View>
    
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
    elevation:17
  }
})

export default home;