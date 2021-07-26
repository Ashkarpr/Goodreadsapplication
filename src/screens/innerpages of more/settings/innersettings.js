import React from 'react';
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-paper';

const home = ({navigation})=>
{
  return(
   
    <View style={{flex:1,backgroundColor:"white",width:"100%"}}>
        <View style={{...style.shadow, width:"100%",height:70,backgroundColor:"#fdf5e6",padding:"5%"}}>
          <View style={{padding:5,flexDirection:"row",height:30,width:"99%",borderRadius:30}}>
            <Text style={{position:"absolute",fontSize:20,}}> 
              Settings
            </Text>
           
          
          <TouchableOpacity style={{position:"absolute",right:"0%"}}>
          <SimpleLineIcons name="bell" size={25} color="grey" style={{}}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{width:"100%",}}>
            <View style={{padding:"5%"}}>
            <Text style={{fontSize:25,}}>Settings</Text>
            </View>
              
          <View style={{backgroundColor:"#fdf5e6"}}>
            <Divider style={{width:"100%",height:1,alignSelf:"center"}} />
        
            <Divider style={{marginTop:"7%",width:"100%",height:1,alignSelf:"center"}} />
            </View>
            <View style={{padding:"3%"}}>
                
            <TouchableOpacity
            onPress={() => {navigation.navigate('inacc')}}
            style={{flexDirection:"row",width:"99%"}}>
                <Text style={{fontSize:18}}>Account</Text>
                <Entypo name="chevron-right" size={25} color="lightgrey"  style={{position:"absolute",right:"0%"}}/>
            </TouchableOpacity>
            <Divider style={{marginVertical:"2%",width:"100%",height:1,alignSelf:"center"}} />
            <TouchableOpacity
            style={{flexDirection:"row",width:"99%"}}>
                <Text style={{fontSize:18}}>Profile</Text>
                <Entypo name="chevron-right" size={25} color="lightgrey"  style={{position:"absolute",right:"0%"}}/>
            </TouchableOpacity>
            <Divider style={{marginVertical:"2%",width:"100%",height:1,alignSelf:"center"}} />
            <TouchableOpacity
            style={{flexDirection:"row",width:"99%"}}>
                <Text style={{fontSize:18}}>Privacy</Text>
                <Entypo name="chevron-right" size={25} color="lightgrey"  style={{position:"absolute",right:"0%"}}/>
            </TouchableOpacity>
            <Divider style={{marginVertical:"2%",width:"100%",height:1,alignSelf:"center"}} />
            <TouchableOpacity
            style={{flexDirection:"row",width:"99%"}}>
                <Text style={{fontSize:18}}>Interest-Based Ads</Text>
                <Entypo name="chevron-right" size={25} color="lightgrey"  style={{position:"absolute",right:"0%"}}/>
            </TouchableOpacity>
          

            </View>
            <Divider style={{marginVertical:"1%",width:"100%",height:1,alignSelf:"center"}} />
            
          
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