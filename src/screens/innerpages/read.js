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
           <TouchableOpacity onPress={() => {navigation.navigate('mybooks')}}>
            <AntDesign name="arrowleft" size={30} color="gray" style={{}} />
            </TouchableOpacity>
            <Text style={{position:"absolute",left:"20%",fontSize:20}}> 
              Read
            </Text>
           
          </View>
          <TouchableOpacity style={{position:"absolute",right:"7%"}}>
          <SimpleLineIcons name="bell" style={{fontSize:24}}/>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:"center",width:"100%",alignItems:"center"}}>
          <Image source={require("../../assets/s.jpg") }  style={{marginTop:"10%",borderWidth:1,resizeMode:"contain"}}/>
         </View>
         <View style={{marginTop:"10%"}}> 
         <Text style={{letterSpacing:.4,fontSize:18,textAlign:"center",fontWeight:"900",}}>
            You haven't added any books yet.
          </Text>
         <Text style={{fontSize:14,letterSpacing:.4,textAlign:"center",marginTop:"1%"}}>
            Explore books and add them to your shelves and tags.
        </Text>
         </View>
         <View style={{marginTop:"10%",width:"100%",alignItems:"center",justifyContent:"center"}}>
           <TouchableOpacity   style={{backgroundColor:"#5B3739",width:"45%",height:45,alignItems:"center",justifyContent:"center"}}>
             <Text  style={{fontSize:16,fontWeight:"bold",color:"#fffdd0",letterSpacing:.4,}}>Explore books</Text>
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