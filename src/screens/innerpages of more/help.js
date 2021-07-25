import React from 'react';
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-paper';

const home = ({navigation})=>
{
  return(
   
    <View style={{flex:1,backgroundColor:"white",width:"100%"}}>
        <View style={{...style.shadow, width:"100%",height:60,backgroundColor:"#fdf5e6",paddingLeft:"5%",justifyContent:"center"}}>
          <View style={{padding:5,flexDirection:"row",height:40,width:"85%",borderRadius:30,padding:"5%",alignItems:"center"}}>
            <Text style={{position:"absolute",fontSize:20,}}> 
              Help
            </Text>
          </View>
          <TouchableOpacity style={{position:"absolute",right:"7%"}}>
          <SimpleLineIcons name="bell" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ width:"100%",height:40,backgroundColor:"#fdf5e6",paddingLeft:"5%"}}>
          <View style={{flexDirection:"row",height:10,width:"90%",padding:"5%",}}>
        
        <Feather name="menu" color="black" size={20} style={{}}/>
        
          </View>
        
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
    elevation:20
  }
})

export default home;