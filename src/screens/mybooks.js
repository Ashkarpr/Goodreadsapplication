import { Divider, Text } from 'react-native-paper';
import { red } from 'chalk';
import { lightgray } from 'color-name';
import React from 'react';
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { color } from 'react-native-elements/dist/helpers';

const mybooks = ({navigation})=>
{
 
  
  return(
      <View style={{flex:1,backgroundColor:"lightgray"}}>
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

        <ScrollView style={{}}>
        <ScrollView style={{width:"100%",backgroundColor:"white",height:"100%",marginBottom:"12%"}}>

      {/* ..........View of text 2021 reading challenge............. */}

          <View style={{marginTop:"5%",alignItems:"center",width:"100%",}}>
          <Text style={{fontWeight:"bold",color:"black",fontSize:17,color:"black"}} >
            2021  READING  CHALLENGE
          </Text>
          <Divider style={{marginTop:"1%",borderRadius:20,width:"40%",height:3,borderColor:"red",}}/>
          </View>

         <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
          <View style={{width:"100%",height:170,alignItems:"center",justifyContent:"center"}}>
            <TouchableOpacity onPress={() => {navigation.navigate('readingchallenges')}} style={{flexDirection:"row",backgroundColor:"white",
                                      borderRadius:10,height:110,width:"90%",alignItems:"center",
                                      ...style.shadow}}>
             <TouchableOpacity style={{justifyContent:"center",alignItems:"center",borderRadius:50,width:"30%"}}>
              <Image source={require("../assets/reader.png")} style={{resizeMode:"contain",height:80,borderRadius:50,}}>
              </Image>
             </TouchableOpacity>
             <Text style={{position:"absolute",left:"30%",top:"25%",fontSize:14,fontWeight:"bold",letterSpacing:0.4,}}>
              You've read 0 of 50 books
             </Text>
             <Progress.Bar progress={0} width={190} style={{height:7,top:3,borderColor:"lightgray",}}/>
          <Text style={{top:3,left:10}}>0%</Text>    
            </TouchableOpacity >
          </View>

          <Text style={{fontWeight:"bold",fontSize:20,marginTop:"2%"}}>
             SHELVES
           </Text>
           <Divider style={{width:"40%",height:3,marginTop:"1%"}}/>
           <TouchableOpacity style={{marginTop:"5%",borderWidth:0.5,alignItems:"center",justifyContent:"center",width:"75%",height:35}}>
            <Text style={{fontWeight:"bold",fontSize:15,color:"black",letterSpacing:.5,}}>
             Update your reading progress
            </Text>
           </TouchableOpacity>

           {/* ............1st pic............... */}

           <View style={{alignSelf:"flex-start",marginLeft:"5%",width:"100%"}}>
           <TouchableOpacity style={{alignItems:"center",marginTop:"3%",flexDirection:"row"}}>  
            <Image source={require("../assets/A.png")} style={{resizeMode:"contain",}}/>
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
            <Image source={require("../assets/A.png")} style={{resizeMode:"contain",}}/>
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
            <Image source={require("../assets/book.jpg")} style={{resizeMode:"contain",}}/>
            <Text style={{fontSize:17,left:8}}>Want to Read</Text>
            <View style={{}}>
              <Text style={{right:"215%",top:"25%",color:"gray"}}>1 book</Text>
            </View>
            </TouchableOpacity>
           </View>
           <Divider style={{width:"90%",height:1}}/>
           <TouchableOpacity>
             <Text style={{fontWeight:"bold",color:"green",marginTop:"5%",fontSize:18,}}>SEE ALL</Text>
           </TouchableOpacity>
           <Divider style={{width:"100%",height:1,marginTop:"5%"}}/>
           <Text style={{marginTop:"5%",fontSize:18,fontWeight:"bold"}}>
             TAGS
           </Text>
           <Divider style={{width:"40%",height:2,marginTop:"2%"}}/>
           <Text style={{textAlign:"center",marginTop:"5%",color:"gray"}}>
             You don't have any tags yet. Add as many tags as you {"\n"} like to categorise your books.
           </Text>
           <Divider style={{width:"100%",height:1,marginTop:"10%"}} />
           <TouchableOpacity style={{marginTop:"5%",borderWidth:.5,width:"70%",height:50,justifyContent:"center"}}>
             <Text style={{textAlign:"center",fontSize:15,textAlignVertical:"center",fontWeight:"bold",}}>
               + Create a new tag or shelf
             </Text>
           </TouchableOpacity>
           <Text style={{fontSize:18,marginTop:"10%",fontWeight:"bold"}}>
             READING ACTIVITY
           </Text>
           <Divider style={{width:"40%",height:2,marginTop:"1%"}} />
           <Divider style={{width:"100%",height:1}} />

           {/* ....... texts starts from here............ */}

          {/* ....... 1st text.............................. */}

           <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",marginTop:"8%"}}>
           <Text style={{marginLeft:"5%",fontSize:18}}>Kindle Notes & Highlites</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:10}}/>
           </TouchableOpacity>
           <Divider style={{marginTop:"2%",height:1,width:"94%"}}/>

           {/* ....... 2nd text.............................. */}
          
           <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",marginTop:"5%"}}>
           <Text style={{marginLeft:"5%",fontSize:18}}>Kindle Notes & Highlites</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:10}}/>
           </TouchableOpacity>
           <Divider style={{marginTop:"2%",height:1,width:"94%"}}/>

           {/* ....... 3rd text.............................. */}
           <TouchableOpacity style={{height:160,paddingBottom:110,width:"100%",flexDirection:"row",alignItems:"center",marginTop:"5%"}}>
           <Text style={{marginLeft:"5%",fontSize:18}}>Kindle Notes & Highlites</Text>
           <Feather name="chevron-right" size={25} style={{paddingBottom:110,position:"absolute",right:10}}/>
           </TouchableOpacity>
          
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
    elevation:20
  }
})

export default mybooks;