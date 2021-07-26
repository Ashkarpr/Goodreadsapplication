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
            <Text  style={{color:"#01ad7b"}}>Settings</Text>
            <Text style={{fontSize:25,}}>Account</Text>
            </View>
              
          <View style={{backgroundColor:"#fdf5e6"}}>
            <Divider style={{width:"100%",height:1,alignSelf:"center"}} />
        
            <Divider style={{marginTop:"7%",width:"100%",height:1,alignSelf:"center"}} />
            </View>
            <View style={{padding:"3%"}}>
                
            <TouchableOpacity
            style={{width:"99%"}}>
                <View  style={{flexDirection:"row"}} >
                <Text style={{fontSize:16}}>Email</Text>
                <Entypo name="chevron-right" size={25} color="lightgrey"  style={{position:"absolute",right:"0%",top:"20%"}}/>
                </View>
                <Text style={{color:"lightgrey"}}>123@gmail.com</Text>
            
            <Divider style={{marginVertical:"2%",width:"100%",height:1,alignSelf:"center"}} />
           <View
            style={{flexDirection:"row",width:"99%"}}>
                <Text style={{color:"lightgrey"}}>This email address has not yet been verified.</Text>
                <Text style={{color:"#01ad7b",position:"absolute",right:"0%"}}>Verifiy</Text>
                </View>

            </TouchableOpacity>
            <Divider style={{marginVertical:"2%",width:"100%",height:1,alignSelf:"center"}} />
            <TouchableOpacity
            style={{width:"99%"}}>
                <View  style={{flexDirection:"row"}}>
                <Text style={{fontSize:16}}>Password</Text>
                <Entypo name="chevron-right" size={25} color="lightgrey"  style={{position:"absolute",right:"0%",top:"20%"}}/>
                </View>
                <Text style={{color:"lightgrey"}}>**********</Text>
            </TouchableOpacity>
            <Divider style={{marginVertical:"2%",width:"100%",height:1,alignSelf:"center"}} />
            </View>
            <View style={{backgroundColor:"#fdf5e6"}}>
            <Divider style={{width:"100%",height:1,alignSelf:"center"}} />
        
            <Divider style={{marginTop:"7%",width:"100%",height:1,alignSelf:"center"}} />
            </View>
            <View style={{paddingHorizontal:"5%",marginVertical:"5%",}}>
                <Text style={{fontWeight:"bold"}}>LINKED ACCOUNTS</Text>
                <Divider style={{marginVertical:"3%",width:"100%",height:1,alignSelf:"center"}} />
                <View style={{flexDirection:"row"}}>
                    
                <Image source={require("../../../assets/facebook.png") }  style={{height:50,width:50,}}/>
                <View style={{flexDirection:"row",width:"85%"}}>
                <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:16}}>Facebook</Text>
                <TouchableOpacity style={{position:"absolute",right:"0%",alignSelf:"center"}}>
                <Text style={{color:"#01ad7b"}}>connect</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={{backgroundColor:"#fdf5e6"}}>
            <Divider style={{width:"100%",height:1,alignSelf:"center"}} />
        
            <Divider style={{marginTop:"7%",width:"100%",height:1,alignSelf:"center"}} />
            </View>
            <TouchableOpacity style={{padding:"2%",flexDirection:"row"}}>
            <Text style={{color:"#e71e14"}}>Delete my account</Text>
                <Entypo name="chevron-right" size={25} color="lightgrey"  style={{position:"absolute",right:"0%",alignSelf:"center"}}/>
            </TouchableOpacity>


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