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

        <ScrollView style={{width:"100%"}}>

        <View style={{borderBottomWidth:.3,marginTop:"1%",flexDirection:"row",alignItems:"center",backgroundColor:"white",paddingLeft:"5%",width:"100%",height:45}}>
          <Text>
              My Kindle Notes & Highlights
          </Text>
         
        </View>

        
        <View style={{alignSelf:"flex-start",paddingRight:"5%",marginLeft:"5%",justifyContent:"center",marginTop:"3%",width:"100%"}}>
           <View style={{flexDirection:"row"}}>
            <Image source={require("../../assets/kindle.png")} style={{resizeMode:"contain",}}/>
            <Ionicons name="arrow-forward" size={50} color="gray" style={{marginTop:"8%",}} />
            <Ionicons name="arrow-back" size={50} color="gray" style={{marginTop:"17%",right:"35%"}} />
            <Image source={require("../../assets/gd1.jpg")} style={{borderRadius:50,position:"absolute",right:0,resizeMode:"contain",}}/>
            </View>
           </View>
           <View style={{width:"100%",backgroundColor:"white",alignItems:"center"}}>
             <Text style={{marginLeft:"5%",alignSelf:"flex-start",fontSize:16}}>
               Link your Goodreads and Amazon accounts to{"\n"}
               access your kindle note and Highlights on{"\n"}
               Goodreads.
             </Text>
             <TouchableOpacity style={{marginTop:"5%",alignSelf:"flex-start",marginLeft:"5%"}}>
              <Text style={{fontSize:16,color:"green"}}>
                Learn More about Kindle Notes & Highlights
              </Text>
             </TouchableOpacity>
             <TouchableOpacity style={{marginTop:"3%",height:35,justifyContent:"center",borderTopLeftRadius:5,width:"90%", alignItems:"center",backgroundColor:"#5B3739"}}>
               <Text style={{color:"white"}}>
                 Connect your accounts
               </Text>
             </TouchableOpacity>
           </View>
         
           </ScrollView>
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