import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-paper';

const home = ({navigation})=>
{
  return(
   
    <View style={{flex:1,backgroundColor:"white",alignItems:"center",width:"100%"}}>
       <View style={{...style.shadow,flexDirection:"row", width:"100%",height:70,backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
          <View style={{padding:5,alignItems:"center",flexDirection:"row",height:40,width:"85%",borderRadius:30}}>
           <TouchableOpacity onPress={() => {navigation.navigate('more')}}>
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

        {/* ...Scroll view started.......... */}
        <ScrollView style={{width:"100%",backgroundColor:"#fdf5e6"}}>
            <View style={{backgroundColor:"white",paddingBottom:"20%",padding:"3%",justifyContent:"center"}}>
                    <View>
                        <Image source={require("../../assets/2020.jpg")} style={{width:"110%",alignSelf:"center"}} />
                        <Divider style={{width:"110%",height:2,marginTop:"5%"}} />
                        <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:23,letterSpacing:.5,marginTop:"2%"}}>
                    CATEGORIES
                    </Text>
                    <Entypo name="chevron-small-up" size={40} style={{fontWeight:"bold",position:"absolute",right:"0%",marginTop:"2%"}} />
                    </View>
                    <View style={{flexDirection:"row",padding:"5%",alignSelf:"center"}}>
                        <View style={{paddingHorizontal:"5%"}}>
                        <Image source={require("../../assets/c1.jpg")}style={{width:150,height:120}} />
                        </View>
                        <View style={{paddingHorizontal:"5%"}}>
                        <Image source={require("../../assets/c2.jpg")}style={{width:150,height:120}} />
                        </View>
                    </View>

                    <View style={{flexDirection:"row",padding:"5%",alignSelf:"center"}}>
                        <View style={{paddingHorizontal:"5%"}}>
                        <Image source={require("../../assets/cl1.jpg")}style={{width:150,height:120}} />
                        </View>
                        <View style={{paddingHorizontal:"5%"}}>
                        <Image source={require("../../assets/cl2.jpg")}style={{width:150,height:120}} />
                        </View>
                    </View>

                    <View style={{flexDirection:"row",padding:"5%",alignSelf:"center"}}>
                        <View style={{paddingHorizontal:"5%"}}>
                        <Image source={require("../../assets/c9.jpg")}style={{width:150,height:120}} />
                        </View>
                        <View style={{paddingHorizontal:"5%"}}>
                        <Image source={require("../../assets/c2.jpg")}style={{width:150,height:120}} />
                        </View>
                    </View>
                    <View style={{alignSelf:"center",width:"100%",alignItems:"center"}}>
                            <TouchableOpacity style={{height:40,width:"100%",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"orange"}}>
                                <Text>
                                    Show 14 more categories
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginTop:"5%",borderWidth:.5,height:30,justifyContent:"flex-start",paddingHorizontal:"5%",alignItems:"center",flexDirection:"row",width:"100%"}}>
                                <Text>
                                    FICTION
                                </Text>
                                <Entypo name="chevron-small-down" size={30} style={{position:"absolute",right:"0%"}} />
                            </TouchableOpacity>
                            
                        </View>

                </View>

                <Divider style={{width:"105%",height:2,marginTop:"5%"}} />
                
         
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