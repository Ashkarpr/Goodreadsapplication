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
           <TouchableOpacity onPress={() => {navigation.navigate('discover')}}>
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
                    <TouchableOpacity style={{justifyContent:"center"}}>
                        <Text style={{color:"green",fontSize:15}}>
                            News and Interviews
                        </Text>
                    </TouchableOpacity>
                    <MaterialIcons name="arrow-right" size={30} color="gray" style={{position:"absolute",left:"38%",top:-4}} />
                </View>
                <Text style={{fontWeight:"bold",fontSize:23,letterSpacing:.5,marginTop:"2%"}}>
                    6 Great Books Hitting Shelves{"\n"}
                    This Week
                </Text>
                <Text style={{color:"lightgray",marginTop:"3%"}}>
                    Posted by cybil on july 20,2021
                </Text>
                <Divider  style={{width:"100%",height:1,marginTop:"3%"}} />
                <View style={{flexDirection:"row",marginTop:"4%",alignItems:"center"}}>
                  <TouchableOpacity>
                    <Text style={{color:"green",}}>
                        40 likes
                   </Text>
                 </TouchableOpacity> 
                 <Text style={{top:-3,fontWeight:"bold",color:"green"}}>
                     {" "}.
                 </Text>
                 <TouchableOpacity>
                    <Text style={{color:"green",}}>
                    {" "} 6 Comments
                   </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{position:"absolute",right:"12%"}}>
                    <MaterialIcons name="facebook" size={35}   style={{color:"blue"}} />
                 </TouchableOpacity>
                 <TouchableOpacity style={{position:"absolute",right:0}}>
                    <Entypo name="twitter-with-circle" size={35}   style={{color:"#1DA1F2"}} />
                 </TouchableOpacity>
                </View>

                <Divider  style={{width:"100%",height:1,marginTop:"5%"}} />

                <View>
                <Text style={{marginTop:"5%",}}>
                    Need another excuse to treat yourself to a new book this{"\n"}
                    week? We've got you covered with the buzziest new{"\n"}
                    releases of the day.
                </Text>
                <View style={{flexDirection:"row",marginTop:"5%"}}>
                    <Text>
                        To create our list, we focused on the books 
                    </Text>
                    <TouchableOpacity>
                        <Text style={{color:"green"}}>
                            {" "} Goodreads
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity>
                        <Text style={{color:"green"}}>
                            members can't wait to read
                        </Text>
                    </TouchableOpacity>
                    <Text>
                        , which we measure by how
                     </Text>
                     </View>
                     <View style={{flexDirection:"row"}}>
                         <Text>
                          many times a book has been added to
                         </Text>
                    <TouchableOpacity>
                        <Text style={{color:"green"}}>
                           {" "} want to Read
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity>
                        <Text style={{color:"green"}}>
                            shelves
                        </Text>
                    </TouchableOpacity>
                    <Text>
                        . All these top titles are now available in the United
                    </Text>
                </View>
                <Text>
                    States! Which ones catch your eye?
                </Text>
            </View>

            {/* ........Books pic started....... */}

            {/* .1st books pic */}

            <View style={{marginTop:"10%",}}>
            <Image  source={require("../../assets/b1.jpg")} style={{resizeMode:"contain"}} height={160} width={100}  />
                <View style={{position:"absolute",left:"35%",}}>
                    <View style={{flexDirection:"row",}}>
                       
                    
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                    For Your  Own Good
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text>
                                by
                            </Text>
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                   {" "} Samantha Downing
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View >
                            <Text style={{fontWeight:"bold"}}>
                                You should read  this book if you
                                </Text>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{fontWeight:"bold"}}>
                                        like:
                                    </Text>
                             <Text > 
                                    Thrillers, prestigious prep
                            </Text>
                            </View>
                            <Text>
                               academies, meddling parents,{"\n"}
                               uppity students, mindless{"\n"}
                               bureaccuracies, teachers who have{"\n"}
                               had enough, bloody consequences{"\n"}
                               thereof
                            </Text>

                        </View>
                        
            </View>
            <TouchableOpacity style={{marginTop:"3%",backgroundColor:"green",borderRadius:5,justifyContent:"center",alignItems:"center",height:30,width:"27%"}}>
                <Text style={{color:"white"}}>
                    Want to Read
                </Text>
            </TouchableOpacity>
         </View>

           {/* .2nd books pic */}

         <View style={{marginTop:"10%",}}>
            <Image  source={require("../../assets/b2.jpg")} style={{resizeMode:"contain"}} height={160} width={100}  />
                <View style={{position:"absolute",left:"35%",}}>
                    <View style={{flexDirection:"row",}}>
                       
                    
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                    The Book of Accidents
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text>
                                by
                            </Text>
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                   {" "} Chuck Wending
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View >
                            <Text style={{fontWeight:"bold"}}>
                                You should read  this book if you
                                </Text>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{fontWeight:"bold"}}>
                                        like:
                                    </Text>
                             <Text > 
                                    The literary end of the horror
                            </Text>
                            </View>
                            <Text>
                               spectrum, Pennsylvania coal mining{"\n"}
                               towns,ancient evils that roam over{"\n"}
                               bureaccuracies, teachers who have{"\n"}
                               and under the hills, love versus evil,
                            </Text>
                            <TouchableOpacity>
                                <Text style={{color:"green",fontStyle:"italic"}}>
                                    Wanderers
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
            </View>
            <TouchableOpacity style={{marginTop:"3%",backgroundColor:"green",borderRadius:5,justifyContent:"center",alignItems:"center",height:30,width:"27%"}}>
                <Text style={{color:"white"}}>
                    Want to Read
                </Text>
            </TouchableOpacity>
         </View>

          {/* 3rd books pic */}

          <View style={{marginTop:"10%",}}>
            <Image  source={require("../../assets/b3.jpg")} style={{resizeMode:"contain"}} height={160} width={100}  />
                <View style={{position:"absolute",left:"35%",}}>
                    <View style={{flexDirection:"row",}}>
                       
                    
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                    Intimacies
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text>
                                by
                            </Text>
                            <TouchableOpacity>
                                <Text style={{color:"green"}}>
                                   {" "} Katie Kitamura
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View >
                            <Text style={{fontWeight:"bold"}}>
                                You should read  this book if you
                                </Text>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{fontWeight:"bold"}}>
                                        like:
                                    </Text>
                             <Text > 
                                    Thrillers, prestigious prep
                            </Text>
                            </View>
                            <Text>
                               Literary fiction, linguistics{"\n"}
                               Proffessional Translator in truble,{"\n"}
                               political machinations,international{"\n"}
                               law, intrigue in the power corridores{"\n"}
                               of the hugue,
                              
                            </Text>

                        </View>
                        
            </View>
            
            <TouchableOpacity style={{marginTop:"3%",backgroundColor:"green",borderRadius:5,justifyContent:"center",alignItems:"center",height:30,width:"27%"}}>
                <Text style={{color:"white"}}>
                    Want to Read
                </Text>
            </TouchableOpacity>
         </View>

         <Text style={{marginTop:"10%",fontWeight:"bold"}}>
             Do you love reading books about books? Which of the{"\n"}
             titles above cathces your eye? Let's talk books in the{"\n"}
             comments!
         </Text>

         <Text style={{marginTop:"10%",}}>
             Checkout more recent articles:
         </Text>
         <TouchableOpacity >
                <Text style={{color:"green"}}>
                    42 popular New Historical Fiction Novels
                </Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={{color:"green"}}>
                   This Year's Most Popular New Sci-Fi Novels
                </Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={{color:"green"}}>
                    24 New family Dramas to Keep You Turning the pages 
                </Text>
            </TouchableOpacity>

         


         <Divider  style={{width:"100%",height:1,marginTop:"10%"}} />
                <View style={{flexDirection:"row",marginTop:"4%",alignItems:"center"}}>
                  <TouchableOpacity style={{backgroundColor:"#fdf5e6",borderWidth:.5,width:"12%",height:20,borderRadius:5,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"black",fontSize:10}}>
                         Like
                   </Text>
                 </TouchableOpacity> 
                 <Text style={{top:-3,fontWeight:"bold",color:"green"}}>
                     {" "}.
                 </Text>
                 <TouchableOpacity>
                    <Text style={{color:"green",}}>
                    {" "} 113 Likes
                   </Text>
                 </TouchableOpacity>
                 <Text style={{top:-3,fontWeight:"bold",color:"green"}}>
                     {" "}.
                 </Text>
                 <TouchableOpacity>
                    <Text style={{color:"green",}}>
                    {" "} 11 Comments
                   </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{position:"absolute",right:"12%"}}>
                    <MaterialIcons name="facebook" size={35}   style={{color:"blue"}} />
                 </TouchableOpacity>
                 <TouchableOpacity style={{position:"absolute",right:0}}>
                    <Entypo name="twitter-with-circle" size={35}   style={{color:"#1DA1F2"}} />
                 </TouchableOpacity>
                </View>

                <Divider  style={{width:"100%",height:1,marginTop:"5%"}} />
         
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