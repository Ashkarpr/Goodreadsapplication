import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
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
              List
            </Text>
           
          </View>
          <TouchableOpacity style={{position:"absolute",right:"7%"}}>
          <SimpleLineIcons name="bell" style={{fontSize:24}}/>
          </TouchableOpacity>
        </View>

        <ScrollView style={{width:"100%",}}>
            <View style={{width:"100%",paddingBottom:"20%"}}>
        <View style={{padding:"3%",borderBottomWidth:.5,borderTopWidth:8,borderTopColor:"lightgray",backgroundColor:"white",justifyContent:"center",width:"100%",alignItems:"center"}}>
          <Text style={{fontSize:17,alignSelf:"flex-start",marginLeft:"5%",color:"black",fontSize:18}}>
          Best General Knowledge Books
          </Text>
         </View>
         
         <View style={{padding:"3%",width:"100%",backgroundColor:"white",flex:1}}>
             <TouchableOpacity>
                <Image  source={require("../../assets/gq.png")} style={{resizeMode:"contain"}} height={140} width={100}  />
            </TouchableOpacity>
                <View style={{paddingTop:"5%",position:"absolute",left:"35%",backgroundColor:"white",width:"100%",}}>
                    <View style={{flexDirection:"row",}}>
                       
                    
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                Static GK Books for MBA Entrance
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text>
                                by
                            </Text>
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                   {" "} experts.
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                      
                           
                            <View style={{flexDirection:"row",marginTop:"2%"}}>
                                <Ionicons name="md-star-sharp" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="gray" style={{}} />
                                <Text>{"  "}4.32</Text>
                            </View>
                            <Text style={{color:"gray"}}>6,860,098 ratings</Text>
                            <View style={{marginTop:"3%",flexDirection:"row"}}>
                                <TouchableOpacity style={{backgroundColor:"#4dab4d",borderEndWidth:1,justifyContent:"center",alignItems:"center",height:30,width:"50%"}}>
                                    <Text style={{color:"white"}}>
                                        Want to Read
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:"#4dab4d",justifyContent:"center",alignItems:"center",height:30,width:"7%"}}>
                                    <MaterialIcons name="arrow-drop-down" size={20} color="white" style={{}} />
                                </TouchableOpacity>
                            </View>
         </View>

         <Divider style={{height:1,alignSelf:"center",width:"110%",marginTop:"3%"}} />
         
         </View>

        {/* ....2nd pic............... */}

        <View style={{padding:"3%",width:"100%",backgroundColor:"white",flex:1}}>
            <TouchableOpacity>
                <Image  source={require("../../assets/g3.webp")} style={{resizeMode:"contain"}} height={140} width={100}  />
            </TouchableOpacity>
                <View style={{paddingTop:"5%",position:"absolute",left:"35%",backgroundColor:"white",width:"100%",}}>
                    <View style={{flexDirection:"row",}}>
                       
                    
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                Encyclopedia of General Science
                                   
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text>
                                by
                            </Text>
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                   {" "} Experts
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                      
                           
                            <View style={{flexDirection:"row",marginTop:"1%"}}>
                                <Ionicons name="md-star-sharp" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="gray" style={{}} />
                                <Text>{"  "}4.32</Text>
                            </View>
                            <Text style={{color:"gray"}}>6,860,098 ratings</Text>
                            <View style={{marginTop:"3%",flexDirection:"row"}}>
                                <TouchableOpacity style={{backgroundColor:"#4dab4d",borderEndWidth:1,justifyContent:"center",alignItems:"center",height:30,width:"50%"}}>
                                    <Text style={{color:"white"}}>
                                        Want to Read
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:"#4dab4d",justifyContent:"center",alignItems:"center",height:30,width:"7%"}}>
                                    <MaterialIcons name="arrow-drop-down" size={20} color="white" style={{}} />
                                </TouchableOpacity>
                            </View>
         </View>

         <Divider style={{height:1,alignSelf:"center",width:"110%",marginTop:"4%"}} />
         
         </View>

         {/* ....3rd pic............ */}

         <View style={{padding:"3%",width:"100%",backgroundColor:"white",flex:1}}>
             <TouchableOpacity>
                <Image  source={require("../../assets/g2.jpg")} style={{resizeMode:"contain"}} height={140} width={100}  />
            </TouchableOpacity>
                <View style={{paddingTop:"5%",position:"absolute",left:"35%",backgroundColor:"white",width:"100%",}}>
                    <View style={{flexDirection:"row",}}>
                       
                    
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                General Knowledge 2021
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text>
                                by
                            </Text>
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                   {" "} Manohar Pandey
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                      
                           
                            <View style={{flexDirection:"row",marginTop:"2%"}}>
                                <Ionicons name="md-star-sharp" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="gray" style={{}} />
                                <Text>{"  "}4.32</Text>
                            </View>
                            <Text style={{color:"gray"}}>6,860,098 ratings</Text>
                            <View style={{marginTop:"3%",flexDirection:"row"}}>
                                <TouchableOpacity style={{backgroundColor:"#4dab4d",borderEndWidth:1,justifyContent:"center",alignItems:"center",height:30,width:"50%"}}>
                                    <Text style={{color:"white"}}>
                                        Want to Read
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:"#4dab4d",justifyContent:"center",alignItems:"center",height:30,width:"7%"}}>
                                    <MaterialIcons name="arrow-drop-down" size={20} color="white" style={{}} />
                                </TouchableOpacity>
                            </View>
         </View>

         <Divider style={{height:1,alignSelf:"center",width:"110%",marginTop:"3%"}} />
         
         </View>

          {/* ....4th pic............ */}

          <View style={{padding:"3%",width:"100%",backgroundColor:"white",flex:1}}>
              <TouchableOpacity>
                 <Image  source={require("../../assets/g4.jpg")} style={{resizeMode:"contain"}} height={140} width={100}  />
             </TouchableOpacity>
                <View style={{paddingTop:"5%",position:"absolute",left:"35%",backgroundColor:"white",width:"100%",}}>
                    <View style={{flexDirection:"row",}}>
                       
                    
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                Word Power Made Easy
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text>
                                by
                            </Text>
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                   {" "}Norman Lewis
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                      
                           
                            <View style={{flexDirection:"row",marginTop:"2%"}}>
                                <Ionicons name="md-star-sharp" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="gray" style={{}} />
                                <Text>{"  "}4.32</Text>
                            </View>
                            <Text style={{color:"gray"}}>6,860,098 ratings</Text>
                            <View style={{marginTop:"3%",flexDirection:"row"}}>
                                <TouchableOpacity style={{backgroundColor:"#4dab4d",borderEndWidth:1,justifyContent:"center",alignItems:"center",height:30,width:"50%"}}>
                                    <Text style={{color:"white"}}>
                                        Want to Read
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:"#4dab4d",justifyContent:"center",alignItems:"center",height:30,width:"7%"}}>
                                    <MaterialIcons name="arrow-drop-down" size={20} color="white" style={{}} />
                                </TouchableOpacity>
                            </View>
         </View>

         <Divider style={{height:1,alignSelf:"center",width:"110%",marginTop:"3%"}} />
         
         </View>

             {/* ....5th pic............ */}

         <View style={{padding:"3%",width:"100%",backgroundColor:"white",flex:1}}>
            <TouchableOpacity>
                <  Image  source={require("../../assets/g5.jpg")} style={{resizeMode:"contain"}} height={140} width={100}  />
            </TouchableOpacity>
                <View style={{paddingTop:"5%",position:"absolute",left:"35%",backgroundColor:"white",width:"100%",}}>
                    <View style={{flexDirection:"row",}}>
                       
                    
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                Fast Track Objective Arithmetic 
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text>
                                by
                            </Text>
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                   {" "} Rajesh Verma
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                      
                           
                            <View style={{flexDirection:"row",marginTop:"2%"}}>
                                <Ionicons name="md-star-sharp" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="red" style={{}} />
                                <Ionicons name="star" size={17} color="gray" style={{}} />
                                <Text>{"  "}4.32</Text>
                            </View>
                            <Text style={{color:"gray"}}>6,860,098 ratings</Text>
                            <View style={{marginTop:"3%",flexDirection:"row"}}>
                                <TouchableOpacity style={{backgroundColor:"#4dab4d",borderEndWidth:1,justifyContent:"center",alignItems:"center",height:30,width:"50%"}}>
                                    <Text style={{color:"white"}}>
                                        Want to Read
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:"#4dab4d",justifyContent:"center",alignItems:"center",height:30,width:"7%"}}>
                                    <MaterialIcons name="arrow-drop-down" size={20} color="white" style={{}} />
                                </TouchableOpacity>
                            </View>
         </View>

         <Divider style={{height:1,alignSelf:"center",width:"110%",marginTop:"3%"}} />
         
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