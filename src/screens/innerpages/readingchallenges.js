import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView, Touchable} from 'react-native';
import { Divider } from 'react-native-paper';
import * as Progress from 'react-native-progress';

const home = ({navigation})=>
{
  return(
   
    <ScrollView style={{width:"100%",backgroundColor:"white"}}>
    <View style={{flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center",width:"100%",}}>
      <View style={{...style.shadow,width:"100%",backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
        <View style={{marginTop:-10,flexDirection:"row", width:"100%",height:90,backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
        <TouchableOpacity onPress={() => {navigation.navigate('mybooks')}}>
          <AntDesign name="arrowleft" size={22} color="black" style={{}} />
        </TouchableOpacity>
          <View style={{marginLeft:"5%",paddingLeft:"1%",alignItems:"center",flexDirection:"row",backgroundColor:"white",height:40,width:"70%",borderRadius:30}}>
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
        <View style={{width:"100%"}}>
         <View style={{flexDirection:"row",width:"100%",}}>
         <TouchableOpacity style={{alignItems:"flex-start",marginLeft:"20%"}} >
          <Text style={{}} >YOUR CHALLENGE</Text>
          <Divider  style={{backgroundColor:"green",marginTop:"3%",width:"102%",height:2}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('friends')}} style={{marginLeft:"8%"}}>
          <Text  >FRIENDS</Text>
          </TouchableOpacity>
        </View>
      </View>
     </View>

     {/* ........2nd portion........ */}

     <View style={{flexDirection:"row",backgroundColor:"#c478c3",width:"100%",justifyContent:"flex-start",alignItems:"center",height:100}}>
      <Image source={require("../../assets/bookv.jpg")} style={{marginLeft:"10%",}} resizeMode="contain" />
      <Text style={{textAlign:"left",fontWeight:"bold",fontSize:25,marginTop:-10,color:"white"}}>2021 READING{"\n"}CHALLENGE</Text>
     </View>
     <View style={{flex:1,width:"100%",height:170,alignItems:"center",marginTop:"5%",justifyContent:"center",backgroundColor:"white"}}>
           <TouchableOpacity style={{width:"90%",backgroundColor:"white",justifyContent:"flex-start",borderRadius:10,height:150,alignItems:"center",...style.shadow}}>
            <TouchableOpacity style={{flexDirection:"row",marginLeft:"-5%",marginTop:"5%"}}>
             <TouchableOpacity style={{justifyContent:"center",alignItems:"center",borderRadius:50,width:"30%"}}>
              <Image source={require("../../assets/reader.png")} style={{resizeMode:"contain",height:80,borderRadius:50,}}>
              </Image>
             </TouchableOpacity>
             <Progress.Bar progress={0} width={190} style={{height:7,marginTop:"10%",borderColor:"lightgray",}}/>
          <Text style={{marginTop:"8%",left:10}}>0%</Text>
             <Text style={{position:"absolute",left:"30%",top:"5%",fontSize:14,fontWeight:"bold",letterSpacing:0.4,}}>
              You've read 0 of 50 books
             </Text>
             
          </TouchableOpacity>
          <View style={{width:"100%",flexDirection:"row",justifyContent:"flex-start",marginLeft:"20%",marginTop:"5%"}}>
          <TouchableOpacity style={{}}>
            <Text style={{color:"green"}}>EDIT GOAL</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{position:"absolute",marginLeft:"26%"}}>
            <Text style={{color:"green"}}>PASTCHALLENGES</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{position:"absolute",right:"15%"}}>
         <AntDesign name="sharealt" style={{fontSize:24}}/>
         </TouchableOpacity>
         </View>
            </TouchableOpacity >
          </View>
          <View style={{width:"100%",alignItems:"center",marginTop:"5%"}}>
            <Text style={{textAlign:"center"}} >
              Well done! Read 2 books per weak for the rest of the year to{"\n"}
              complete your challenges
            </Text>
            <Text style={{marginTop:"5%",fontWeight:"bold",}}>
              BOOKS READ THIS YEAR  
            </Text > 
            <Divider style={{marginTop:"2%",width:"30%",height:2}} />
            <Text  style={{marginTop:"15%"}}>
              Book rader  has not read any books towards their goal yet.
            </Text>
        </View>
    </View>
    </ScrollView>
    
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