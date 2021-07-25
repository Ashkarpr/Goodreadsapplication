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
              Edit your favourite genres
            </Text>
           
          </View>
          <TouchableOpacity style={{position:"absolute",right:"7%"}}>
          <AntDesign name="check" style={{fontSize:24}}/>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth:.5,borderTopWidth:8,borderTopColor:"lightgray",height:70,backgroundColor:"white",justifyContent:"center",width:"100%",alignItems:"center"}}>
          <Text style={{fontSize:16,}}>
              We'll use your favourite genres to personalise your{"\n"}
              book recommendations
          </Text>
         </View>
         <ScrollView style={{width:"100%",}}>
         <View style={{marginTop:"5%",backgroundColor:"white",width:"100%",flex:1,paddingBottom:"20%"}}> 
         <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
         <TouchableOpacity style={{...style.shadow,marginRight:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
                <Text style={{fontSize:20}}>
                    Biography
                </Text>
            </TouchableOpacity>   
            <TouchableOpacity style={{...style.shadow,marginLeft:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20}}>
                    Business
                </Text>
            </TouchableOpacity>   
        </View>
        <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"2%"}}>
            <TouchableOpacity style={{...style.shadow,marginRight:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20}}>
                    Children's
                </Text>
            </TouchableOpacity>   
            <TouchableOpacity style={{...style.shadow,marginLeft:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20}}>

                    CookBooks
                </Text>
            </TouchableOpacity>   
        </View>
        <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"2%"}}>
            <TouchableOpacity style={{...style.shadow,marginRight:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20}}>
                    Fantasy
                </Text>
            </TouchableOpacity>   
            <TouchableOpacity style={{...style.shadow,marginLeft:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20}}>

                    Fiction
                </Text>
            </TouchableOpacity>   
        </View>
        <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"2%"}}>
            <TouchableOpacity style={{...style.shadow,marginRight:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20}}>
                    Graphic Novels
                </Text>
            </TouchableOpacity>   
            <TouchableOpacity style={{...style.shadow,marginLeft:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20,textAlign:"center"}}>

                    Historical{"\n"}
                    Fiction
                </Text>
            </TouchableOpacity>   
        </View>
        <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"2%"}}>
            <TouchableOpacity style={{...style.shadow,marginRight:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20}}>
                History
            </Text>
            </TouchableOpacity>   
            <TouchableOpacity style={{...style.shadow,marginLeft:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20,textAlign:"center"}}>
                    Horror
                </Text>
            </TouchableOpacity>   
        </View>
        <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"2%"}}>
            <TouchableOpacity style={{...style.shadow,marginRight:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20,textAlign:"center"}}>
                Humor &{"\n"}
                Comedy
            </Text>
            </TouchableOpacity>   
            <TouchableOpacity style={{...style.shadow,marginLeft:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20,textAlign:"center"}}>
                    Mystery
                </Text>
            </TouchableOpacity>   
        </View>
        <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"2%"}}>
            <TouchableOpacity style={{...style.shadow,marginRight:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20}}>
                Nonfiction
            </Text>
            </TouchableOpacity>   
            <TouchableOpacity style={{...style.shadow,marginLeft:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20,textAlign:"center"}}>
                    Poetry
                </Text>
            </TouchableOpacity>   
        </View>
        <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"2%"}}>
            <TouchableOpacity style={{...style.shadow,marginRight:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20}}>
                Romance
            </Text>
            </TouchableOpacity>   
            <TouchableOpacity style={{...style.shadow,marginLeft:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20,textAlign:"center"}}>
                    Science Fiction
                </Text>
            </TouchableOpacity>   
        </View>
        <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"2%"}}>
            <TouchableOpacity style={{...style.shadow,marginRight:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20}}>
                Thriller
            </Text>
            </TouchableOpacity>   
            <TouchableOpacity style={{...style.shadow,marginLeft:"1%",width:"45%",height:80,justifyContent:"center",alignItems:"center",borderWidth:.3,borderRadius:3,backgroundColor:"#fdf5e6"}}>
            <Text style={{fontSize:20,textAlign:"center"}}>
                    Young
                </Text>
            </TouchableOpacity>   
        </View>
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
      height:1
    },
    shadowOpacity:0.5,
    shadowRadius:0.5,
    elevation:1
  }
})

export default home;