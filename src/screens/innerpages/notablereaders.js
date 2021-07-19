import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView, Touchable} from 'react-native';
import { Divider } from 'react-native-paper';

const home = ({navigation})=>
{
  return(
   
    <ScrollView style={{width:"100%",backgroundColor:"lightgreen"}}>
    <View style={{flex:1,backgroundColor:"white",alignItems:"center",width:"100%",paddingBottom:"15%"}}>
        <View style={{...style.shadow,flexDirection:"row", width:"100%",height:70,backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
        <TouchableOpacity onPress={() => {navigation.navigate('home')}}>
          <AntDesign name="arrowleft" size={22} color="black" style={{}} />
        </TouchableOpacity>
          <View style={{marginLeft:"5%",alignItems:"center",flexDirection:"row",backgroundColor:"white",height:40,width:"70%",borderRadius:30}}>
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
        
         <View style={{marginTop:"5%",width:"100%",justifyContent:"center",alignItems:"center"}}> 
          <View style={{marginTop:"5%",}}>
          <Text style={{letterSpacing:.2,color:"black",fontSize:20,textAlign:"left"}}>
            Readers to follow
          </Text>
           <Text style={{fontSize:16,marginTop:"5%",letterSpacing:.4,}}>
             Follow your favourite authors, top reviewers{"\n"}
             and other influential to see their{"\n"}
             reviews and recommendations
           </Text>
        </View>
      </View>
      <Divider style={{marginTop:"7%",width:"100%",height:1}} />

      {/* .........pics start from here............. */}

      <View style={{flex:1,width:"100%",backgroundColor:"white",paddingHorizontal:"2%"}}>
        <View style={{height:140,backgroundColor:"white",flexDirection:"row",marginTop:"3%",flexWrap:"wrap",width:"100%"}}>
         
          <Image  source={require("../../assets/craig.jpg")} resizeMode="contain" style={{borderRadius:100}} />
          <Text style={{marginLeft:"5%",fontWeight:"bold",fontSize:15}}>
            Craig Martelle
          </Text>
          <Text style={{marginLeft:"24%",position:"absolute",marginTop:"6%"}} >224 books . 2,797 followers</Text>
          <Text style={{marginLeft:"24%",position:"absolute",marginTop:"15%",}} >
         Retired Marine Corps Officeer, turned lawyer,{"\n"}
         and business conultant. I am author of{"\n"}
         fiction, science fiction and action  ...
       </Text> 
       <TouchableOpacity style={{flexDirection:"row",marginTop:"32%",position:"absolute",right:"0%"}} >
         <Text style={{color:"green"}}>
           Read More 
         </Text>
         <AntDesign name="arrowright" size={22} color="green" style={{}} />
       </TouchableOpacity>
      </View>
      <TouchableOpacity style={{marginLeft:"15%",justifyContent:"center",alignItems:"flex-start",alignSelf:"center",marginTop:"5%",}}>
        <Text style={{textAlign:"center",fontSize:15,fontWeight:"bold",textAlignVertical:"center",borderWidth:1,width:250,height:30,}}>
          Follow
        </Text>
      </TouchableOpacity>
      </View>
      <Divider style={{marginTop:"3%",width:"100%",height:2}} />

      {/* 2nd pic................... */}

      <View style={{flex:1,width:"100%",backgroundColor:"white",paddingHorizontal:"2%"}}>
        <View style={{height:140,backgroundColor:"white",flexDirection:"row",marginTop:"3%",flexWrap:"wrap",width:"100%"}}>
         
          <Image  source={require("../../assets/deepak.jpg")} resizeMode="contain" style={{borderRadius:100}} />
          <Text style={{marginLeft:"5%",fontWeight:"bold",fontSize:15}}>
           Deepak Chopra
          </Text>
          <Text style={{marginLeft:"24%",position:"absolute",marginTop:"6%"}} >2 books . 9,682 followers</Text>
          <Text style={{marginLeft:"24%",position:"absolute",marginTop:"15%",}} >
         Deepak Chopra, MD serves as the founder{"\n"}
         and Chairman of the Chopra Foundation.{"\n"}
         and Co-Founder of the Chopra Center for ...
       </Text> 
       <TouchableOpacity style={{flexDirection:"row",marginTop:"32%",position:"absolute",right:"0%"}} >
         <Text style={{color:"green"}}>
           Read More 
         </Text>
         <AntDesign name="arrowright" size={22} color="green" style={{}} />
       </TouchableOpacity>
      </View>
      <TouchableOpacity style={{marginLeft:"15%",justifyContent:"center",alignItems:"flex-start",alignSelf:"center",marginTop:"5%",}}>
        <Text style={{textAlign:"center",fontSize:15,fontWeight:"bold",textAlignVertical:"center",borderWidth:1,width:250,height:30,}}>
          Follow
        </Text>
      </TouchableOpacity>
      </View>
      <Divider style={{marginTop:"3%",width:"100%",height:2}} />


      
      {/* 3rd pic................... */}

      <View style={{flex:1,width:"100%",backgroundColor:"white",paddingHorizontal:"2%"}}>
        <View style={{height:140,backgroundColor:"white",flexDirection:"row",marginTop:"3%",flexWrap:"wrap",width:"100%"}}>
         
          <Image  source={require("../../assets/james.jpg")} resizeMode="contain" style={{borderRadius:100}} />
          <Text style={{marginLeft:"5%",fontWeight:"bold",fontSize:15}}>
           Deepak Chopra
          </Text>
          <Text style={{marginLeft:"24%",position:"absolute",marginTop:"6%"}} >205 books . 20,249 followers</Text>
          <Text style={{marginLeft:"24%",position:"absolute",marginTop:"15%",}} >
         I love reading (duh, stupid, that's why{"\n"}
         you're here!), watching movies and eating{"\n"}
         unhealthy stuff (even though i'am trying) ...
       </Text> 
       <TouchableOpacity style={{flexDirection:"row",marginTop:"32%",position:"absolute",right:"0%"}} >
         <Text style={{color:"green"}}>
           Read More 
         </Text>
         <AntDesign name="arrowright" size={22} color="green" style={{}} />
       </TouchableOpacity>
      </View>
      <TouchableOpacity style={{marginLeft:"15%",justifyContent:"center",alignItems:"flex-start",alignSelf:"center",marginTop:"5%",}}>
        <Text style={{textAlign:"center",fontSize:15,fontWeight:"bold",textAlignVertical:"center",borderWidth:1,width:250,height:30,}}>
          Follow
        </Text>
      </TouchableOpacity>
      </View>
      <Divider style={{marginTop:"3%",width:"100%",height:2}} />

      {/* 4th pic................... */}

      <View style={{flex:1,width:"100%",backgroundColor:"white",paddingHorizontal:"2%"}}>
        <View style={{height:140,backgroundColor:"white",flexDirection:"row",marginTop:"3%",flexWrap:"wrap",width:"100%"}}>
         
          <Image  source={require("../../assets/jeffrey.jpg")} resizeMode="contain" style={{borderRadius:100}} />
          <Text style={{marginLeft:"5%",fontWeight:"bold",fontSize:15}}>
           Jeffrey Keeten
          </Text>
          <Text style={{marginLeft:"24%",position:"absolute",marginTop:"6%"}} >3,927 books . 237,018 followers</Text>
          <Text style={{marginLeft:"24%",position:"absolute",marginTop:"15%",}} >
         I am here to celebrate reading, writing, and{"\n"}
         writers. I write impressions of my reading{"\n"}
         experience ...
       </Text> 
       <TouchableOpacity style={{flexDirection:"row",marginTop:"32%",position:"absolute",right:"0%"}} >
         <Text style={{color:"green"}}>
           Read More 
         </Text>
         <AntDesign name="arrowright" size={22} color="green" style={{}} />
       </TouchableOpacity>
      </View>
      <TouchableOpacity style={{marginLeft:"15%",justifyContent:"center",alignItems:"flex-start",alignSelf:"center",marginTop:"5%",}}>
        <Text style={{textAlign:"center",fontSize:15,fontWeight:"bold",textAlignVertical:"center",borderWidth:1,width:250,height:30,}}>
          Follow
        </Text>
      </TouchableOpacity>
      </View>
      <Divider style={{marginTop:"3%",width:"100%",height:2}} />
      
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