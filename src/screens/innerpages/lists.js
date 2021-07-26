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
           <TouchableOpacity onPress={() => {navigation.navigate('discover')}}>
            <AntDesign name="arrowleft" size={30} color="gray" style={{}} />
            </TouchableOpacity>
            <Text style={{position:"absolute",left:"20%",fontSize:20}}> 
              Lists
            </Text>
           
          </View>
          <TouchableOpacity style={{position:"absolute",right:"7%"}}>
          <SimpleLineIcons name="bell" style={{fontSize:24}}/>
          </TouchableOpacity>
        </View>

        <ScrollView style={{width:"100%",}}>
        <View style={{borderTopWidth:8,backgroundColor:"white",borderTopColor:"lightgray",height:70,justifyContent:"center",width:"100%",alignItems:"center"}}>
          <Text style={{fontSize:16,fontWeight:"bold",letterSpacing:.5}}>
              BROWS LISTS BY CATEGORY
          </Text>
          <Divider style={{height:3,width:"40%",backgroundColor:"lightgray",marginTop:"2%"}} />
         </View>
         <View style={{paddingLeft:"5%",paddingRight:"5%",alignSelf:"center",alignItems:"center",justifyContent:"center",backgroundColor:"white",width:"100%"}}>
         <View style={{flexDirection:"row",width:"70%",marginTop:"7%",}}>
           
                <Text style={{color:"green",}}>
                    Romance
                </Text>
                   <Text  style={{color:"green",position:"absolute",right:"0%",}}>
                    Fiction
                </Text>
             </View>

             <View style={{flexDirection:"row",width:"70%",marginTop:"5%",}}>
           
           <Text style={{color:"green",}}>
               Young Adult
           </Text>
              <Text  style={{color:"green",position:"absolute",right:"0%",}}>
               Fantasy
           </Text>
        </View>

        <View style={{flexDirection:"row",width:"70%",marginTop:"5%"}}>
           
           <Text style={{color:"green",}}>
               Science Fiction
           </Text>
              <Text  style={{color:"green",position:"absolute",right:"0%",}}>
               Non Fiction
           </Text>
       
        </View>
        <TouchableOpacity style={{borderWidth:1,marginTop:"7%",height:40,width:"75%",alignItems:"center",justifyContent:"center"}}>
                <Text>
                    SHOW MORE CATEGORIES
                </Text>
            </TouchableOpacity>
            <Divider style={{height:1,width:"110%",marginTop:"5%"}} />
         </View>
         <View style={{marginTop:"5%",paddingLeft:"4%",alignItems:"center",paddingRight:"5%",backgroundColor:"white",width:"100%",flex:1,paddingBottom:"20%"}}> 
         <Text style={{marginTop:"5%",fontWeight:"bold",fontSize:18}}>
                    POPULAR LISTS
                </Text>
                <Divider style={{height:2,width:"45%",marginTop:"1%"}} />
                
            <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"5%"}}>
            <View style={{backgroundColor:"white",right:"10%"}}>
              <TouchableOpacity style={{}}>
                    <Image source={require("../../assets/michel.jpg")} style={{resizeMode:"contain",borderRadius:2,}}  />
                    <Text style={{fontWeight:"bold"}}>
                        Best Books Ever
                    </Text>
                    <Text style={{color:"gray"}}>
                        56,967 books
                    </Text>
              </TouchableOpacity>  
              </View>

              <View style={{backgroundColor:"white",left:"10%"}}>
              <TouchableOpacity style={{}}>
                    <Image source={require("../../assets/fact.png")} style={{resizeMode:"contain",borderRadius:2,}}  />
                    <Text style={{fontWeight:"bold"}}>
                    Books Readable Book
                    </Text>
                    <Text style={{color:"gray"}}>
                        56,967 books
                    </Text>
              </TouchableOpacity>  
              </View>
            </View>

            <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"10%"}}>
            <View style={{backgroundColor:"white",right:"10%"}}>
              <TouchableOpacity style={{}}>
                    <Image source={require("../../assets/mary.jpg")} style={{resizeMode:"contain",borderRadius:2,}}  />
                    <Text style={{fontWeight:"bold"}}>
                        Best Historical Fiction
                    </Text>
                    <Text style={{color:"gray"}}>
                        56,967 books
                    </Text>
              </TouchableOpacity>  
              </View>

              <View style={{backgroundColor:"white",left:"10%"}}>
              <TouchableOpacity style={{}}>
                    <Image source={require("../../assets/wow.jpg")} style={{resizeMode:"contain",borderRadius:2,}}  />
                    <Text style={{fontWeight:"bold"}}>
                        Best Books of Fiction
                    </Text>
                    <Text style={{color:"gray"}}>
                        56,967 books
                    </Text>
              </TouchableOpacity>  
              </View>
            </View>


            <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"10%"}}>
            <View style={{backgroundColor:"white",right:"10%"}}>
              <TouchableOpacity style={{}}>
                    <Image source={require("../../assets/other.jpg")} style={{resizeMode:"contain",borderRadius:2,}}  />
                    <Text style={{fontWeight:"bold"}}>
                        Best Books Ever
                    </Text>
                    <Text style={{color:"gray"}}>
                        56,967 books
                    </Text>
              </TouchableOpacity>  
              </View>

              <View style={{backgroundColor:"white",left:"10%"}}>
              <TouchableOpacity style={{}}>
                    <Image source={require("../../assets/the.jpg")} style={{resizeMode:"contain",borderRadius:2,}}  />
                    <Text style={{fontWeight:"bold"}}>
                        Best Books Ever
                    </Text>
                    <Text style={{color:"gray"}}>
                        56,967 books
                    </Text>
              </TouchableOpacity>  
              </View>
            </View>
            

            <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"10%"}}>
            <View style={{backgroundColor:"white",right:"10%"}}>
              <TouchableOpacity style={{}}>
                    <Image source={require("../../assets/adam.jpg")} style={{resizeMode:"contain",borderRadius:2,}}  />
                    <Text style={{fontWeight:"bold"}}>
                        Best Books Ever
                    </Text>
                    <Text style={{color:"gray"}}>
                        56,967 books
                    </Text>
              </TouchableOpacity>  
              </View>

              <View style={{backgroundColor:"white",left:"10%"}}>
              <TouchableOpacity style={{}}>
                    <Image source={require("../../assets/ada.jpg")} style={{resizeMode:"contain",borderRadius:2,}}  />
                    <Text style={{fontWeight:"bold"}}>
                        Best Books Ever
                    </Text>
                    <Text style={{color:"gray"}}>
                        56,967 books
                    </Text>
              </TouchableOpacity>  
              </View>
            </View>


            <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:"10%"}}>
            <View style={{backgroundColor:"white",right:"10%"}}>
              <TouchableOpacity style={{}}>
                    <Image source={require("../../assets/the.jpg")} style={{resizeMode:"contain",borderRadius:2,}}  />
                    <Text style={{fontWeight:"bold"}}>
                        Best Books Ever
                    </Text>
                    <Text style={{color:"gray"}}>
                        56,967 books
                    </Text>
              </TouchableOpacity>  
              </View>

              <View style={{backgroundColor:"white",left:"10%"}}>
              <TouchableOpacity style={{}}>
                    <Image source={require("../../assets/silk.png")} style={{resizeMode:"contain",borderRadius:2,}}  />
                    <Text style={{fontWeight:"bold"}}>
                        Best Books Ever
                    </Text>
                    <Text style={{color:"gray"}}>
                        56,967 books
                    </Text>
              </TouchableOpacity>  
              </View>
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