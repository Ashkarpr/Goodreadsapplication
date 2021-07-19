import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-paper';

const home = ({navigation})=>
{
  return(
   
    <View style={{flex:1,backgroundColor:"white",alignItems:"center",width:"100%"}}>
        <View style={{...style.shadow,flexDirection:"row", width:"100%",height:70,backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
          <View style={{padding:5,alignItems:"center",flexDirection:"row",height:40,width:"85%",borderRadius:30}}>
           <TouchableOpacity onPress={() => {navigation.navigate('home')}}>
            <AntDesign name="arrowleft" size={30} color="gray" style={{}} />
            </TouchableOpacity>
            <Text style={{position:"absolute",left:"20%",fontSize:20}}> 
              Find Friends
            </Text>
           
          </View>
          <TouchableOpacity style={{position:"absolute",right:"7%"}}>
          <SimpleLineIcons name="bell" style={{fontSize:24}}/>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:"center",width:"100%",alignItems:"center"}}>
          <Image source={require("../../assets/find.png") }  style={{borderRadius:30,marginTop:"5%",borderWidth:1,resizeMode:"contain"}}/>
         </View>
         <View style={{marginTop:"5%"}}> 
         <Text style={{textAlign:"center",color:"gray"}}>
            Connect on Goodreads to see{"\n"}
            what your friends are reading,{"\n"}
            share reviews, highlights,{"\n"}
            recommendations and more.
          </Text>
  
         </View>
         <View style={{marginTop:"5%",width:"100%",alignItems:"center",justifyContent:"center"}}>
           <TouchableOpacity  style={{backgroundColor:"#5B3739",width:"60%",height:45,alignItems:"center",justifyContent:"center"}}>
             <Text  style={{fontSize:16,fontWeight:"bold",color:"white",letterSpacing:.4,}}>Find contacts</Text>
           </TouchableOpacity>
           <TouchableOpacity   style={{marginTop:"5%",backgroundColor:"white",borderWidth:1,borderColor:"#5B3739",width:"60%",height:45,alignItems:"center",justifyContent:"center"}}>
             <Text  style={{fontSize:16,fontWeight:"bold",color:"black",letterSpacing:.4,}}>Share Goodreads</Text>
           </TouchableOpacity>
           <TouchableOpacity   style={{flexDirection:"row",marginTop:"5%",backgroundColor:"#4267B2",width:"60%",height:45,alignItems:"center",justifyContent:"center"}}>
            <Image source={require("../../assets/fb.png")} style={{resizeMode:"contain",width:30,}} />
             <Text  style={{fontSize:16,fontWeight:"bold",color:"white",letterSpacing:.4,}}>Add Facebook friends</Text>
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
    elevation:20
  }
})

export default home;