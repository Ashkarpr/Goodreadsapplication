import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text} from 'react-native';
import { Divider, List } from 'react-native-paper';




const home = ({navigation})=>
{

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

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
                    <TouchableOpacity style={{alignSelf:"center",justifyContent:"center",marginTop:"2%"}}>
                        <Text style={{color:"black",fontSize:30}}>
                            News and Interviews
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{backgroundColor:"#5B3739",marginTop:"5%",width:"107%",alignSelf:"center",paddingLeft:"6%",paddingRight:"6%"}}>
                <List.Section style={{justifyContent:"center",backgroundColor:"white"}}>
                <List.Accordion style={{justifyContent:"center",height:20,backgroundColor:"#5B3739",}}
                    
                    title="All Stories"
                    titleStyle={{color:"white"}}
                    color="white"
                    left={props => <List.Icon {...props}/>}>
                    <List.Item title="All Stories"/>
                    <List.Item title="Articles" />
                    <List.Item title="Interviews" />
                    <List.Item title="New Releases" />
                </List.Accordion>
                </List.Section>
                </View>
                {/* ...1st pic.............. */}

                <View style={{...style.shadow,marginTop:"5%",padding:"3%",borderRadius:3,alignSelf:"center",alignItems:"center",justifyContent:"center",backgroundColor:"white",width:"100%"}}>
                    <Image source={require("../../assets/nb1.png")}  />
                    <View style={{flexDirection:"row",width:"100%",}}>
                        <Text style={{color:"gray",fontSize:15,fontWeight:"bold"}}>
                            News
                        </Text>
                        <Text style={{position:"absolute",right:"0%",bottom:"0%",color:"gray",}}>
                            Jul 08
                        </Text>
                    </View>
                    <Text style={{fontWeight:"bold",alignSelf:"flex-start",fontSize:17.5,marginTop:"2%"}}>
                        42 Popular New Historical Fiction Novels
                    </Text>
                    <View style={{width:"100%",marginTop:"2%",flexDirection:"row"}}>
                        <Text style={{fontSize:13,lineHeight:20}}>
                            Let's face it: 2021 may not be your preffered year. Not to{"\n"}
                            worry, because these books make a great case for some{"\n"}
                            page-turning time...
                        </Text>
                        <TouchableOpacity style={{position:"absolute",bottom:"0%",left:"35%"}}>
                            <Text style={{color:"green"}}>
                                Read more
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",width:"100%",marginTop:"1%"}}>
                        <TouchableOpacity style={{}}>
                                <Text style={{color:"green"}}>
                                    79 Likes
                                </Text>
                        </TouchableOpacity>
                        <Text style={{color:"green",marginTop:-3}}>
                           {" "} .{" "}
                        </Text>

                        <TouchableOpacity style={{}}>
                                <Text style={{color:"green"}}>
                                    33 Comments
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* ...2nd pic............... */}

                <View style={{...style.shadow,marginTop:"5%",padding:"3%",borderRadius:3,alignSelf:"center",alignItems:"center",justifyContent:"center",backgroundColor:"white",width:"100%"}}>
                    <Image source={require("../../assets/nb2.png")}  />
                    <View style={{flexDirection:"row",width:"100%",}}>
                        <Text style={{color:"gray",fontSize:15,fontWeight:"bold"}}>
                            News
                        </Text>
                        <Text style={{position:"absolute",right:"0%",bottom:"0%",color:"gray",}}>
                            Jul 08
                        </Text>
                    </View>
                    <Text style={{fontWeight:"bold",alignSelf:"flex-start",fontSize:17.5,marginTop:"2%"}}>
                         36 Most Popular YA Books of the Year
                    </Text>
                    <View style={{width:"100%",marginTop:"2%",flexDirection:"row"}}>
                        <Text style={{fontSize:13,lineHeight:20}}>
                        Are you searching for a great young adult novel to dive into? In that case, you've come to the right place. Goodreads members are pros at scouting out immersive YA reads, and since we're now halfway through 2020 (what?!), it's time to round up the most popular YA titles of the year so far....
                        </Text>
                        <TouchableOpacity style={{position:"absolute",bottom:"0%",left:"35%"}}>
                            <Text style={{color:"green"}}>
                                Read more
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",width:"100%",marginTop:"1%"}}>
                        <TouchableOpacity style={{}}>
                                <Text style={{color:"green"}}>
                                    79 Likes
                                </Text>
                        </TouchableOpacity>
                        <Text style={{color:"green",marginTop:-3}}>
                           {" "} .{" "}
                        </Text>

                        <TouchableOpacity style={{}}>
                                <Text style={{color:"green"}}>
                                    33 Comments
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                 {/* ...3rd pic............... */}

                 <View style={{...style.shadow,marginTop:"5%",padding:"3%",borderRadius:3,alignSelf:"center",alignItems:"center",justifyContent:"center",backgroundColor:"white",width:"100%"}}>
                    <Image source={require("../../assets/nb3.jpg")}  />
                    <View style={{flexDirection:"row",width:"100%",}}>
                        <Text style={{color:"gray",fontSize:15,fontWeight:"bold"}}>
                            News
                        </Text>
                        <Text style={{position:"absolute",right:"0%",bottom:"0%",color:"gray",}}>
                            Jul 08
                        </Text>
                    </View>
                    <Text style={{fontWeight:"bold",alignSelf:"flex-start",fontSize:17.5,marginTop:"2%"}}>
                       These Are the Best YA Books Getting Us Through 2020
                    </Text>
                    <View style={{width:"100%",marginTop:"2%",flexDirection:"row"}}>
                        <Text style={{fontSize:13,lineHeight:20}}>
                        This has been an incredibly tough year for so many people and for so many reasons, and we've all had to find ways to cope. For me, finding books that speak to me is always at the top of my list, and I know I'm not alone. Though we may all need comfort these days, we find it in very different ways, whether that means only engaging with media that brings joy, or sticking with work that reflects your activism, or prioritizing stories by marginalized creators, or something else entirely...
                        </Text>
                        <TouchableOpacity style={{position:"absolute",bottom:"0%",left:"45%"}}>
                            <Text style={{color:"green"}}>
                                Read more
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",width:"100%",marginTop:"1%"}}>
                        <TouchableOpacity style={{}}>
                                <Text style={{color:"green"}}>
                                    79 Likes
                                </Text>
                        </TouchableOpacity>
                        <Text style={{color:"green",marginTop:-3}}>
                           {" "} .{" "}
                        </Text>

                        <TouchableOpacity style={{}}>
                                <Text style={{color:"green"}}>
                                    33 Comments
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ...4th pic............... */}

                <View style={{...style.shadow,marginTop:"5%",padding:"3%",borderRadius:3,alignSelf:"center",alignItems:"center",justifyContent:"center",backgroundColor:"white",width:"100%"}}>
                    <Image source={require("../../assets/nb4.jpg")}  />
                    <View style={{flexDirection:"row",width:"100%",}}>
                        <Text style={{color:"gray",fontSize:15,fontWeight:"bold"}}>
                            News
                        </Text>
                        <Text style={{position:"absolute",right:"0%",bottom:"0%",color:"gray",}}>
                            Jul 08
                        </Text>
                    </View>
                    <Text style={{fontWeight:"bold",alignSelf:"flex-start",fontSize:17.5,marginTop:"2%"}}>
                    24 New Historical Fiction Novels to Read Now
                    </Text>
                    <View style={{width:"100%",marginTop:"2%",flexDirection:"row"}}>
                        <Text style={{fontSize:13,lineHeight:20}}>
                        Sometimes the best place to visit as a reader is the past. Luckily for you, this year is already seeing fantastic new historical fiction ready to transport you to many other times and distant story lines....
                        </Text>
                        <TouchableOpacity style={{position:"absolute",bottom:"0%",left:"55%"}}>
                            <Text style={{color:"green"}}>
                                Read more
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",width:"100%",marginTop:"1%"}}>
                        <TouchableOpacity style={{}}>
                                <Text style={{color:"green"}}>
                                    79 Likes
                                </Text>
                        </TouchableOpacity>
                        <Text style={{color:"green",marginTop:-3}}>
                           {" "} .{" "}
                        </Text>

                        <TouchableOpacity style={{}}>
                                <Text style={{color:"green"}}>
                                    33 Comments
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                
                {/* ...5th pic............... */}

                <View style={{...style.shadow,marginTop:"5%",padding:"3%",borderRadius:3,alignSelf:"center",alignItems:"center",justifyContent:"center",backgroundColor:"white",width:"100%"}}>
                    <Image source={require("../../assets/nb5.jpg")}  />
                    <View style={{flexDirection:"row",width:"100%",}}>
                        <Text style={{color:"gray",fontSize:15,fontWeight:"bold"}}>
                            News
                        </Text>
                        <Text style={{position:"absolute",right:"0%",bottom:"0%",color:"gray",}}>
                            Jul 08
                        </Text>
                    </View>
                    <Text style={{fontWeight:"bold",alignSelf:"flex-start",fontSize:17.5,marginTop:"2%"}}>
                        10 best African American history books, per Goodreads members
                    </Text>
                    <View style={{width:"100%",marginTop:"2%",flexDirection:"row"}}>
                        <Text style={{fontSize:13,lineHeight:20}}>
                        Our editors independently selected these items because we think you will enjoy them and might like them at these prices. If you purchase something through our links, we may earn a commission. Pricing and availability are accurate as of publish time...
                        </Text>
                        <TouchableOpacity style={{position:"absolute",bottom:"0%",left:"55%"}}>
                            <Text style={{color:"green"}}>
                                Read more
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",width:"100%",marginTop:"1%"}}>
                        <TouchableOpacity style={{}}>
                                <Text style={{color:"green"}}>
                                    79 Likes
                                </Text>
                        </TouchableOpacity>
                        <Text style={{color:"green",marginTop:-3}}>
                           {" "} .{" "}
                        </Text>

                        <TouchableOpacity style={{}}>
                                <Text style={{color:"green"}}>
                                    33 Comments
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={{backgroundColor:"#f2efe9",borderWidth:1,height:40,justifyContent:"center",alignItems:"center",marginTop:"5%"}}>
                    <Text style={{color:"black"}}>
                        Load More
                    </Text>
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
    elevation:17
  }
})

export default home;