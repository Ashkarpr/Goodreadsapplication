import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-paper';

const home = ({navigation})=>
{
  return(
   
    <View style={{flex:1,backgroundColor:"white",alignItems:"center",width:"100%"}}>
        <View style={{...style.shadow,flexDirection:"row", width:"100%",height:70,backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
          <View style={{padding:5,alignItems:"center",flexDirection:"row",backgroundColor:"white",height:40,width:"85%",borderRadius:30}}>
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
        <View style={{justifyContent:"center",width:"100%",alignItems:"center"}}>
          <Image source={require("../assets/s.jpg") }  style={{marginTop:"5%",borderWidth:1,resizeMode:"contain"}}/>
         </View>
         <View style={{marginTop:"5%"}}> 
         <Text style={{letterSpacing:.4,fontSize:15,textAlign:"center"}}>
            You don't have any updates yet.
          </Text>
          <View style={{marginTop:"3%",flexDirection:"row"}}>
           <Text style={{fontSize:15,letterSpacing:.4,textAlign:"center"}}>
             Find your next book by following
           </Text>
           <TouchableOpacity  onPress={() => {navigation.navigate('notablereaders')}} >
             <Text style={{fontSize:15,letterSpacing:.4,textAlign:"center",color:"green"}}> notable readers</Text>
           </TouchableOpacity>
          </View>
          <Text style={{fontSize:15,letterSpacing:.4,textAlign:"center"}}>or adding friends</Text>
         </View>
         <View style={{marginTop:"5%",width:"100%",alignItems:"center",justifyContent:"center"}}>
           <TouchableOpacity  onPress={() => {navigation.navigate('findfriends')}} style={{backgroundColor:"#5B3739",width:"45%",height:45,alignItems:"center",justifyContent:"center"}}>
             <Text  style={{fontSize:16,fontWeight:"bold",color:"#fffdd0",letterSpacing:.4,}}>Find your friends</Text>
           </TouchableOpacity>
         </View>
         <Divider style={{marginTop:"5%",width:"100%",height:1}} />
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