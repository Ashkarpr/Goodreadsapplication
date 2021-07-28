import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

const discover = ({navigation})=>
{
  return(
   
    <View style={{flex:1,backgroundColor:"white",width:"100%"}}>
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

        <ScrollView style={{backgroundColor:"white",}}>
        <ScrollView style={{width:"100%",backgroundColor:"white",height:"100%",paddingBottom:100}}>
        <View style={{justifyContent:"center",width:"100%",alignItems:"center",backgroundColor:"white",marginTop:"5%"}}>
         <Text onPress={() => {navigation.navigate('newsandnterviews')}} style={{fontWeight:"bold",fontSize:19}}>
           NEWS AND INTERVIEWS
         </Text>
         <Divider style={{width:"55%",height:2}} /> 
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
         <View style={{paddingBottom:"4%",alignSelf:"center",borderRadius:.5,marginTop:"5%",justifyContent:"center",alignItems:"center",backgroundColor:"white",borderWidth:.05,...style.shadow}}>
          <TouchableOpacity onPress={() => {navigation.navigate('newsandnterviews')}} >
          <Image onPress={() => {navigation.navigate('newsandnterviews')}} source={require("../assets/banner.png") }  style={{resizeMode:"contain",borderWidth:1,}}/>
          <Text  style={{textAlign:"center",marginTop:"2%"}}>
           Meet the Authors of Summer's Biggest Mysteries
          </Text>
          <Text style={{alignSelf:"flex-start",marginLeft:"2%",marginTop:"3%"}}>
           483 likes  .  6 comments
          </Text>
          </TouchableOpacity>
         </View>
         <TouchableOpacity onPress={() => {navigation.navigate('seemoreposts')}}  style={{marginTop:"5%"}}>
          <Text style={{color:"green",fontSize:14,fontWeight:"bold"}}>
            SEE MORE POSTS
          </Text>
         </TouchableOpacity>
         <Divider style={{marginTop:"2%",width:"100%",height:2}}/>
        </View>
        <View style={{marginTop:"5%",alignItems:"center",justifyContent:"center"}}>
          <Text onPress={() => {navigation.navigate('lists')}}  style={{fontWeight:"bold"}}>
            FEATURED LISTS
          </Text>
          <Divider style={{width:"28%",height:1.5}}/>
        </View>
        <ScrollView horizontal = {true} style={{backgroundColor:"white",marginTop: "10%",flexDirection:"row",}}>
         <View style={{justifyContent:"center",alignItems:"center"}}>
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingRight:20}}>
            <TouchableOpacity onPress={() => {navigation.navigate('bestbooksever')}} >
              <Image source={require("../assets/11img.jpg")} style={{resizeMode:"contain",marginLeft:20,borderRadius:5}}/>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {navigation.navigate('booksthateveryoneread')}}>
              <Image source={require("../assets/2img.jpg")} style={{resizeMode:"contain",marginLeft:20,borderRadius:5}}/>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {navigation.navigate('bestgkbooks')}}>
             <Image source={require("../assets/3img.jpg")} style={{resizeMode:"contain",marginLeft:20,borderRadius:5}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('best20th')}} >
              <Image source={require("../assets/4img.jpg")} style={{resizeMode:"contain",marginLeft:20,borderRadius:5}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('booksforkids')}}  >
             <Image source={require("../assets/1img.png")} style={{resizeMode:"contain",marginLeft:20,borderRadius:5}}/>
            </TouchableOpacity>
          </View>
          <View style={{alignSelf:"flex-start",marginLeft:22,marginTop:10,flexDirection:"row"}}>
            <Text onPress={() => {navigation.navigate('bestbooksever')}} style={{fontWeight:"bold",letterSpacing:.5}}>
              Best Books Ever
            </Text>
            <Text  onPress={() => {navigation.navigate('booksthateveryoneread')}} style={{fontWeight:"bold",letterSpacing:.5, marginLeft:115, textAlign:"left"}}>
              Books That Everyone Should Read {"\n"}At Least Once
            </Text>
            <Text onPress={() => {navigation.navigate('bestgkbooks')}} style={{fontWeight:"bold",letterSpacing:.5, marginLeft:17, textAlign:"left"}}>
              Best General Knowledge Books
            </Text>
            <Text  onPress={() => {navigation.navigate('best20th')}}  style={{fontWeight:"bold",letterSpacing:.5, marginLeft:27, textAlign:"left"}}>
              Best Books of the 20th Century
            </Text>
            <Text onPress={() => {navigation.navigate('booksforkids')}}  style={{fontWeight:"bold",letterSpacing:.5,marginLeft:33}}>
              Best Books for Kids
            </Text>
          </View>
          <View style={{alignSelf:"flex-start",marginLeft:22,flexDirection:"row"}}>
            <Text onPress={() => {navigation.navigate('bestbooksever')}} style={{color:"gray",marginTop:-17}}>56,786 books</Text>
            <Text  onPress={() => {navigation.navigate('booksthateveryoneread')}} style={{color:"gray",left:140}}>23,497 books</Text>
            <Text onPress={() => {navigation.navigate('bestgkbooks')}} style={{color:"gray",position:"absolute",left:"40.7%",marginTop:-17}}>12,361 books</Text>
            <Text  onPress={() => {navigation.navigate('best20th')}}  style={{color:"gray",position:"absolute",left:"61%",marginTop:-17}}>7,596 books</Text>
            <Text onPress={() => {navigation.navigate('booksforkids')}}  style={{color:"gray",position:"absolute",left:"81.5%",marginTop:-17}}>11,506 books</Text>
          </View>
         </View>
       </ScrollView>
       <View style={{justifyContent:"center",alignItems:"center",width:"100%",marginTop:"10%"}}>
        <Text onPress={() => {navigation.navigate('lists')}}  style={{borderWidth:1,width:"80%",textAlign:"center",fontSize:12,letterSpacing:.5,textAlignVertical:"center",fontWeight:"bold",height:40}}>
          SHOW MORE LISTS
        </Text>
       </View>
      </ScrollView>  
      
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
    elevation:5
  }
})

export default discover;