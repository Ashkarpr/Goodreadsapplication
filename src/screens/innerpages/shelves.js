import { Divider, Text } from 'react-native-paper';
import { red } from 'chalk';
import { lightgray } from 'color-name';
import React from 'react';
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const mybooks = ({navigation})=>
{
 
  
  return(
      <View style={{flex:1,backgroundColor:"white"}}>
         <View style={{...style.shadow,flexDirection:"row", width:"100%",height:70,backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
          <View style={{padding:5,alignItems:"center",flexDirection:"row",height:40,width:"85%",borderRadius:30}}>
           <TouchableOpacity onPress={() => {navigation.navigate('mybooks')}}>
            <AntDesign name="arrowleft" size={30} color="gray" style={{}} />
            </TouchableOpacity>
            <Text style={{position:"absolute",left:"20%",fontSize:20}}> 
              All shelves & tags
            </Text>
           
          </View>
          <TouchableOpacity style={{position:"absolute",right:"7%"}}>
          <SimpleLineIcons name="bell" style={{fontSize:24}}/>
          </TouchableOpacity>
        </View>

         <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>

           {/* ............1st pic............... */}

           <View style={{alignSelf:"flex-start",marginLeft:"5%",width:"100%"}}>
           <TouchableOpacity style={{alignItems:"center",marginTop:"3%",flexDirection:"row"}}>  
            <Image source={require("../../assets/A.png")} style={{resizeMode:"contain",}}/>
            <Text style={{fontSize:17,left:8}}>Read</Text>
            <View style={{}}>
              <Text style={{right:"57%",top:"25%",color:"gray"}}>0 books</Text>
            </View>
            </TouchableOpacity>
           </View>
           <Divider style={{width:"90%",height:1}}/>

           {/* ............2nd pic............... */}

           <View style={{marginTop:-5,alignSelf:"flex-start",marginLeft:"5%",width:"100%"}}>
           <TouchableOpacity style={{alignItems:"center",marginTop:"3%",flexDirection:"row"}}>  
            <Image source={require("../../assets/A.png")} style={{resizeMode:"contain",}}/>
            <Text style={{fontSize:17,left:8}}>Currently Reading</Text>
            <View style={{}}>
              <Text style={{right:"250%",top:"25%",color:"gray"}}>0 books</Text>
            </View>
            </TouchableOpacity>
           </View>
           <Divider style={{width:"90%",height:1}}/>

           {/* ............3rd pic............... */}

           <View style={{marginTop:-5,alignSelf:"flex-start",marginLeft:"5%",width:"100%"}}>
           <TouchableOpacity style={{alignItems:"center",marginTop:"3%",flexDirection:"row"}}>  
            <Image source={require("../../assets/book.jpg")} style={{resizeMode:"contain",}}/>
            <Text style={{fontSize:17,left:8}}>Want to Read</Text>
            <View style={{}}>
              <Text style={{right:"215%",top:"25%",color:"gray"}}>1 book</Text>
            </View>
            </TouchableOpacity>
           </View>
           <Divider style={{width:"90%",height:1}}/>
        
           
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

export default mybooks;