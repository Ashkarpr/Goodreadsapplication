import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const mybooks = ({navigation})=>
{
  return(
    <View style={{flex:1,flexWrap:"wrap",backgroundColor:"transparent",alignItems:"center",}}>
       <View style={{width:"100%",position:"absolute",bottom:"0%",paddingBottom:"20%",backgroundColor:"white",alignItems:"center",}}>
         
         {/* .......1st raw....................... */}
         
         <View style={{paddingHorizontal:"5%",flexDirection:"row",}}>
          <TouchableOpacity
           onPress={() => {navigation.navigate('Profile')}}
           style={{marginTop:"10%",justifyContent:"center",alignItems:'center'}}>
          <View style={{backgroundColor:"#fdf5e6",height:70,width:70,borderRadius:100,justifyContent:"center"}}>
          <FontAwesome name="user-o" size={40}  style={{alignSelf:"center"}} /></View>
            
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>My profile</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {navigation.navigate('Friends')}}
            style={{marginLeft:"5%",marginTop:"10%"}}>
            <View style={{backgroundColor:"#fdf5e6",height:70,width:70,borderRadius:100,justifyContent:"center"}}>
            <FontAwesome5 name="user-friends" size={40}  style={{alignSelf:"center"}} /></View>
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {navigation.navigate('group')}}
            style={{marginLeft:"5%",marginTop:"10%"}}>
            <View style={{backgroundColor:"#fdf5e6",height:70,width:70,borderRadius:100,justifyContent:"center"}}>
            <FontAwesome5 name="users" size={40}  style={{alignSelf:"center"}} /></View>
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Groups</Text>
          </TouchableOpacity>
         </View>

{/* ...................2nd raw............ */}

        <View style={{paddingHorizontal:"5%",flexDirection:"row",}}>
          <TouchableOpacity 
           onPress={() => {navigation.navigate('reading')}}
          style={{marginTop:"10%"}}>
            <View style={{backgroundColor:"#fdf5e6",height:70,width:70,borderRadius:100,justifyContent:"center"}}>
          <Octicons name="book" size={40}  style={{alignSelf:"center"}} /></View>
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Reading{"\n"}Challenge</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {navigation.navigate('give')}}
            style={{marginLeft:"5%",marginTop:"10%"}}>
            <View style={{backgroundColor:"#fdf5e6",height:70,width:70,borderRadius:100,justifyContent:"center"}}>
            <Octicons name="gift" size={40}  style={{alignSelf:"center"}} /></View>
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Giveaways</Text>
          </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {navigation.navigate('toppik')}}
             style={{marginLeft:"5%",marginTop:"10%"}}>
            <View style={{backgroundColor:"#fdf5e6",height:70,width:70,borderRadius:100,justifyContent:"center"}}>
            <SimpleLineIcons name="notebook" size={40}  style={{alignSelf:"center"}} /></View>
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Top picks{"\n"}for you</Text>
            </TouchableOpacity>
           
         </View>

        {/* ...................3rd raw............ */}

        <View style={{paddingHorizontal:"5%",flexDirection:"row",}}>
        <TouchableOpacity
        onPress={() => {navigation.navigate('bestbook')}}
         style={{marginTop:"10%"}}>
            <View style={{backgroundColor:"#fdf5e6",height:70,width:70,borderRadius:100,justifyContent:"center"}}>
            <SimpleLineIcons name="trophy" size={40}  style={{alignSelf:"center"}} /></View>
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Best books{"\n"}of 2020</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {navigation.navigate('scan')}}
           style={{marginTop:"10%",marginLeft:"5%"}}>
          <View style={{backgroundColor:"#fdf5e6",height:70,width:70,borderRadius:100,justifyContent:"center"}}>
            <SimpleLineIcons name="camera" size={40}  style={{alignSelf:"center"}} /></View>
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Scan Books</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {navigation.navigate('settings')}}
            style={{marginLeft:"5%",marginTop:"10%"}}>
            <View style={{backgroundColor:"#fdf5e6",height:70,width:70,borderRadius:100,justifyContent:"center"}}>
            <AntDesign name="setting" size={40}  style={{alignSelf:"center"}} /></View>
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Settings</Text>
            </TouchableOpacity>
            {/* ...................4th raw............ */}
           
         </View>
         <View style={{paddingHorizontal:"5%",flexDirection:"row",}}>
         <TouchableOpacity
         onPress={() => {navigation.navigate('help')}}
          style={{marginTop:"10%"}}>
            <View style={{backgroundColor:"#fdf5e6",height:70,width:70,borderRadius:100,justifyContent:"center"}}>
            <MaterialCommunityIcons name="message-alert-outline" size={40}  style={{alignSelf:"center"}} /></View>
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Help</Text>
          </TouchableOpacity>
            </View>


       </View>
    </View>
  )
}
export default mybooks;