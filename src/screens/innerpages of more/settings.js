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
              Settings & Support
            </Text>
           
          
          <TouchableOpacity style={{position:"absolute",right:"0%"}}>
          <SimpleLineIcons name="bell" size={25} color="grey" style={{}}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{width:"100%",padding:"5%"}}>
            <TouchableOpacity  onPress={() => {navigation.navigate('inset')}}
            style={{flexDirection:"row",width:"99%"}}>
                <Text style={{fontSize:18}}>Settings</Text>
                <Entypo name="chevron-right" size={18} color="black"  style={{position:"absolute",right:"0%"}}/>
            </TouchableOpacity>
            <Divider style={{marginTop:"4%",width:"100%",height:1,alignSelf:"center"}} />
            <TouchableOpacity style={{width:"99%",marginTop:"4%"}}>
                <View style={{flexDirection:"row"}} >
                <Text style={{fontSize:18}}>App interface language</Text>
                <Entypo name="chevron-right" size={18} color="black"  style={{position:"absolute",right:"0%"}}/>
                </View>
                <Text>English</Text>
            </TouchableOpacity>
            <Divider style={{marginTop:"4%",width:"100%",height:1,alignSelf:"center"}} />
            <View style={{ alignContent:"center",justifyContent:"center",alignItems:"center"}}>
                <View style={{flexDirection:"row",padding:"5%"}}>
                    <Text style={{fontSize:40,fontWeight:"100",fontStyle:"italic",color:"grey"}}>good</Text>
                    <Text style={{fontSize:40}}>reads</Text>
                </View>
                <Text>Find more book you'll love.</Text>
                <Text>Use the scan feature to easily keep track of books.</Text>
                <Text>Get recommendations from readers like you.</Text>
                <View style={{flexDirection:"row",marginTop:"5%"}}>
                    <TouchableOpacity> 
                        <Text style={{color:"#01ad7b"}}>Terms of Use . </Text>
                    </TouchableOpacity>
                    <TouchableOpacity> 
                        <Text style={{color:"#01ad7b"}}>Privacy Policy . </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity> 
                        <Text style={{color:"#01ad7b"}}>Ads Policy .</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{marginBottom:"5%"}}>
                <Text style={{color:"#01ad7b"}}>Open Source Software</Text>
                </TouchableOpacity>
                <Text>Version 2.30.0 @ 2021</Text>
                <TouchableOpacity style={{marginTop:"5%"}}>
                    <Text  style={{color:"#01ad7b"}}>SIGN OUT</Text>
                </TouchableOpacity>

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