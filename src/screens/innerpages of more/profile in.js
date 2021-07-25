import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-paper';

const home = ({navigation})=>
{
  return(
    <View style={{flex:1,backgroundColor:"white",width:"100%",height:"100%"}}>
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
        <ScrollView>
        <View style={{justifyContent:"center",width:"100%",alignItems:"center"}}>
          <Image source={require("../../assets/reading.png") }  style={{marginTop:"5%",borderWidth:1,resizeMode:"contain",height:60,width:60}}/>
         </View>
         <View style={{marginTop:"5%"}}> 
         <Text style={{letterSpacing:.4,fontSize:15,textAlign:"center",fontWeight:"500",fontSize:25}}>
            Syed Mohamed
          </Text>
          <View style={{marginTop:"3%",flexDirection:"row",left:"20%",justifyContent:"center"}}>
           <Text style={{fontSize:15,letterSpacing:.4,alignSelf:"center",alignSelf:"center"}}>0 books  .  0 friends
           </Text>
          </View>
         </View>
         <Divider style={{marginTop:"1%",width:"80%",height:1,alignSelf:"center"}} />
         <View style={{marginTop:"2%",width:"100%",alignItems:"center",justifyContent:"center"}}>
           <TouchableOpacity   style={{width:"45%",height:45,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
           <MaterialCommunityIcons name="pencil" size={20} color="#024a15" style={{}}/>
             <Text  style={{fontSize:15,color:"#024a15",}}>SETTINGS</Text>
             </TouchableOpacity>
         </View>
         <Divider style={{marginTop:"1%",width:"100%",height:1}} />
         <Text style={{fontWeight:'bold',marginTop:"5%",alignSelf:"center"}}>0 BOOKS</Text>
         <Divider style={{marginTop:"1%",width:"40%",height:3,borderRadius:50,alignSelf:"center"}} />
         <Octicons name="book" size={40} color="#bfa58d"  style={{alignSelf:"center",marginTop:"5%"}}/>
         <Text style={{alignSelf:"center"}}>you haven't added any books yet</Text>
         <Divider style={{marginTop:"5%",width:"100%",height:1,borderRadius:50}} />
         <Text style={{fontWeight:'bold',marginTop:"5%",alignSelf:"center"}}>0 FRIENDS</Text>
         <Divider style={{marginTop:"1%",width:"40%",height:3,borderRadius:50,alignSelf:"center"}} />
         <FontAwesome5 name="user-friends" size={40}  color="#bfa58d" style={{alignSelf:"center",marginTop:"5%"}} />
            <Text style={{alignSelf:"center",marginBottom:"3%"}}>you haven't added any friends yet</Text>
            <Text style={{fontSize:12,letterSpacing:.4,alignSelf:"center",alignSelf:"center",color:"#024a15"}}>0 FOLLOOWING  0 FOLLOWERS</Text>
            <Divider style={{marginTop:"5%",width:"100%",height:1,borderRadius:50}} />
            <Text style={{fontWeight:'bold',marginTop:"5%",alignSelf:"center"}}>0 GROUPS</Text>
         <Divider style={{marginTop:"1%",width:"40%",height:3,borderRadius:50,alignSelf:"center"}} />
         <FontAwesome5 name="users" size={40} color="#bfa58d" style={{alignSelf:"center",alignSelf:"center",marginTop:"5%",marginBottom:"2%"}} />
            <Text style={{alignSelf:"center"}}>You are not a member of any groups</Text>
            <Divider style={{marginTop:"5%",width:"100%",height:1,borderRadius:50}} />
            <Text style={{fontWeight:'bold',marginTop:"5%",alignSelf:"center"}}>UPDATES</Text>
         <Divider style={{marginTop:"1%",width:"40%",height:3,borderRadius:50,alignSelf:"center"}} />
         <TouchableOpacity style={{borderWidth:1,width:"60%",alignSelf:"center",height:"3.8%",marginTop:"3%",justifyContent:"center"}}>
         <Text style={{alignSelf:"center",fontWeight:"400"}}>Add an update</Text>
         </TouchableOpacity>
         <Image source={require("../../assets/s.jpg") }  style={{marginTop:"5%",borderWidth:1,resizeMode:"contain",alignSelf:"center"}}/>
            <Text style={{alignSelf:"center",marginTop:"2%"}}>You are not a member of any groups</Text>
            <Divider style={{marginTop:"5%",width:"100%",height:1,borderRadius:50,marginBottom:"15%"}} />

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

export default home;