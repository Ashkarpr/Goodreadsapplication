import React from 'react';
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-paper';

const home = ({navigation})=>
{
  return(
   
    <View style={{flex:1,backgroundColor:"white",width:"100%",height:"100%"}}>
        <View style={{...style.shadow,flexDirection:"row", width:"100%",height:60,backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
          <View style={{padding:"5%",alignItems:"center",flexDirection:"row",height:40,width:"99%",borderRadius:30}}>
           
            <Text style={{position:"absolute",fontSize:20}}> 
              Recommendations for you
            </Text>
          </View>
          <TouchableOpacity style={{position:"absolute",right:"5%"}}>
          <SimpleLineIcons name="bell" style={{fontSize:24}}/>
          </TouchableOpacity>
        </View>
        <ScrollView style={{with:"100%",height:"100%"}}>
        <View style={{borderWidth:1,padding:"5%",height:150,width:"96%",alignSelf:"center",marginTop:"2%",borderRadius:5,marginBottom:"5%",borderColor:"grey"}}>
            <Text style={{marginBottom:"2%"}}>Recommendation for you</Text>
            <Text>Goodreads finds out about your personal testes{'\n'}from your rating</Text>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity>
              <Text style={{color:"darkgreen",fontSize:15,marginRight:"1%"}}>Keep rating book</Text>
             
            </TouchableOpacity>
            <Text style={{top:1}}>to increse the quality of your</Text>
            </View>
              <Text>recommendations!</Text>
        </View>
        <View style={{paddingHorizontal:"5%",height:350}}>
        <Text style={{}}>Biography</Text>
        <View style={{flexDirection:"row",height:'50%'}}>
          <View style={{flexDirection:"column",marginTop:"3%",marginRight:"10%"}}>
          <Image source={require("../../assets/intothe.jpg") }  style={{resizeMode:"contain",height:235,width:160,}}/>
          <View style={{flexDirection:"row", alignSelf:"center"}}> 
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          </View>
                        
          <TouchableOpacity style={{borderStyle:"dashed",backgroundColor:"#01ad7b"
          ,height:30,width:"80%",alignSelf:"center",marginVertical:"5%",justifyContent:"center",}}>
              <Text style={{color:"#fff",alignSelf:"center"}}> Want to Read</Text>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:"column",marginTop:"3%",}}>
          <Image source={require("../../assets/Teamof.jpg") }  style={{resizeMode:"contain",height:235,width:160,}}/>
          <View style={{flexDirection:"row", alignSelf:"center"}}> 
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          </View>
          <TouchableOpacity style={{borderStyle:"dashed",backgroundColor:"#01ad7b"
          ,height:30,width:"80%",alignSelf:"center",marginVertical:"5%",justifyContent:"center",}}>
              <Text style={{color:"#fff",alignSelf:"center"}}> Want to Read</Text>
          </TouchableOpacity>
          
          </View>
        </View>
        </View>
        <Divider style={{marginVertical:"4%",width:"100%",height:1,alignSelf:"center"}} />
        <View style={{paddingHorizontal:"5%",height:350}}>
        <Text style={{}}>Childrean</Text>
        <View style={{flexDirection:"row",height:'50%'}}>
          <View style={{flexDirection:"column",marginTop:"3%",marginRight:"10%"}}>
          <Image source={require("../../assets/thetipping.jpg") }  style={{resizeMode:"contain",height:235,width:160,}}/>
          <View style={{flexDirection:"row", alignSelf:"center"}}> 
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          </View>
                        
          <TouchableOpacity style={{borderStyle:"dashed",backgroundColor:"#01ad7b"
          ,height:30,width:"80%",alignSelf:"center",marginVertical:"5%",justifyContent:"center",}}>
              <Text style={{color:"#fff",alignSelf:"center"}}> Want to Read</Text>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:"column",marginTop:"3%",}}>
          <Image source={require("../../assets/richdad.jpg") }  style={{resizeMode:"contain",height:235,width:160,}}/>
          <View style={{flexDirection:"row", alignSelf:"center"}}> 
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          </View>
          <TouchableOpacity style={{borderStyle:"dashed",backgroundColor:"#01ad7b"
          ,height:30,width:"80%",alignSelf:"center",marginVertical:"5%",justifyContent:"center",}}>
              <Text style={{color:"#fff",alignSelf:"center"}}> Want to Read</Text>
          </TouchableOpacity>
          
          </View>
        </View>
        </View>
        <Divider style={{marginVertical:"4%",width:"100%",height:1,alignSelf:"center"}} />
        <View style={{paddingHorizontal:"5%",height:350}}>
        <Text style={{}}>Business</Text>
        <View style={{flexDirection:"row",height:'50%'}}>
          <View style={{flexDirection:"column",marginTop:"3%",marginRight:"10%"}}>
          <Image source={require("../../assets/thesecret.jpg") }  style={{resizeMode:"contain",height:235,width:160,}}/>
          <View style={{flexDirection:"row", alignSelf:"center"}}> 
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          </View>
                        
          <TouchableOpacity style={{borderStyle:"dashed",backgroundColor:"#01ad7b"
          ,height:30,width:"80%",alignSelf:"center",marginVertical:"5%",justifyContent:"center",}}>
              <Text style={{color:"#fff",alignSelf:"center"}}> Want to Read</Text>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:"column",marginTop:"3%",}}>
          <Image source={require("../../assets/web.jpg") }  style={{resizeMode:"contain",height:235,width:160,}}/>
          <View style={{flexDirection:"row", alignSelf:"center"}}> 
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          <Entypo name="star" size={20} color='grey' style={{}}/>
          </View>
          <TouchableOpacity style={{borderStyle:"dashed",backgroundColor:"#01ad7b"
          ,height:30,width:"80%",alignSelf:"center",marginVertical:"5%",justifyContent:"center",}}>
              <Text style={{color:"#fff",alignSelf:"center"}}> Want to Read</Text>
          </TouchableOpacity>
          
          </View>
        </View>
        </View>
        <Divider style={{marginVertical:"4%",width:"100%",height:1,alignSelf:"center"}} />
        <View style={{padding:"10%",height:200}}>
          <Text style={{alignSelf:"center",color:"grey"}}>Want to see more recommendations?</Text>
          <TouchableOpacity style={{height:40,width:"75%",borderWidth:1,borderColor:"#d1cb93",alignSelf:"center",justifyContent:"center"}}>
            <Text style={{alignSelf:"center"}}>Edit Favourite Genres</Text>

          </TouchableOpacity>

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
    elevation:20
  }
})

export default home;