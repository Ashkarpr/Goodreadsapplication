import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-paper';
import { grey100 } from 'react-native-paper/lib/typescript/styles/colors';

const home = ({navigation})=>
{
  return(
   
    <View style={{flex:1,backgroundColor:"white",alignItems:"center",width:"100%"}}>
        <View style={{...style.shadow,flexDirection:"row", width:"100%",height:70,backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
          <View style={{padding:5,alignItems:"center",flexDirection:"row",height:40,width:"85%",borderRadius:30}}>
           <TouchableOpacity onPress={() => {navigation.navigate('More')}}>
            <AntDesign name="arrowleft" size={30} color="gray" style={{}} />
            </TouchableOpacity>
            <Text style={{position:"absolute",left:"20%",fontSize:20}}> 
              Goodreads
            </Text>
          </View>
          <TouchableOpacity style={{position:"absolute",right:"7%"}}>
          <SimpleLineIcons name="bell" style={{fontSize:24}}/>
          </TouchableOpacity>
        </View>

        <View style={{width:"100%",padding:20}}>
            <TouchableOpacity style={{flexDirection:"row"}}>
                <Text style={{fontWeight:"bold"}}>Giveaways you'have entered</Text>
                <AntDesign name="right" size={20}  style={{marginBottom:"1%"}} />
            </TouchableOpacity>
            <Text style={{fontWeight:"100",fontSize:20,marginBottom:"1%"}}>Giveaways</Text>
           <Text style={{fontSize:16.5}}>Enter to win free books sponsored by{"\n"}authors and publishers.</Text>
           <View style={{flexDirection:"row",marginTop:"5%",marginBottom:"1%"}}>
               <TouchableOpacity style={{borderWidth:2,justifyContent:"center",
               alignContent:"center",borderRadius:20,padding:10,width:"30%",borderColor:"#74766b"}}>
                    <Text style={{alignSelf:"center"}}>Featured</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{borderWidth:2,justifyContent:"center",
               alignContent:"center",borderRadius:20,padding:10,width:"30%",marginLeft:"2%",borderColor:"#74766b"}}>
                    <Text style={{alignSelf:"center"}}>Ending</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{borderWidth:2,justifyContent:"center",
               alignContent:"center",borderRadius:20,padding:10,width:"30%",marginLeft:"2%",borderColor:"#74766b"}}>
                    <Text style={{alignSelf:"center"}}>Recent</Text>
               </TouchableOpacity>
           </View>
           <View style={{flexDirection:"row",marginBottom:"10%"}}>
           <TouchableOpacity style={{borderWidth:2,justifyContent:"center",
               alignContent:"center",borderRadius:20,padding:10,width:"30%",borderColor:"#74766b"}}>
                    <Text style={{alignSelf:"center"}}>Popular</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{borderWidth:2,justifyContent:"center",
               alignContent:"center",borderRadius:20,padding:10,width:"30%",marginLeft:"2%",borderColor:"#74766b",flexDirection:"row"}}>
                     <Octicons name="settings" style={{fontSize:20,marginRight:"10%"}}/>

                    <Text style={{alignSelf:"center"}}>Filters</Text>
               </TouchableOpacity>
           </View>
           <Text style={{}}>Giveaways are currently only avalible to resident</Text>
            <Text style={{}}>of the U.S and Canada.</Text>
           <Text style={{}}>In the U.S or Canada?</Text>
    
  
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