import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-paper';

const search = ()=>
{
  return(
   
    <View style={{flex:1,backgroundColor:"white",width:"100%"}}>
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

        <ScrollView style={{backgroundColor:"white",}}>
        <ScrollView style={{width:"100%",backgroundColor:"white",height:"100%",paddingBottom:100}}>
        <View style={{justifyContent:"center",width:"100%",alignItems:"center",backgroundColor:"white",marginTop:"5%"}}>
         <Text style={{fontWeight:"bold",fontSize:17}}>
           EXPLORE BY GENRE
         </Text>
         <Divider style={{width:"40%",height:2}} /> 
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        
        </View>
        <View style={{marginTop:"5%",alignItems:"center",justifyContent:"center"}}>
          <Text style={{textAlign:"center"}}>
            See new releases, most-read books, quotes, lists and {"\n"} more in these popular genres
          </Text>
       </View>

       <View style={{width:"100%",paddingLeft:"4%",justifyContent:"center",paddingTop:"5%"}}>
         <View style={{flexDirection:"row",}}>
            <Image source={require("../assets/1color.jpg")} style={{resizeMode:"contain"}} />
            <Image source={require("../assets/2color.jpg")} style={{position:"absolute",resizeMode:"contain",marginLeft:"27%"}} />
            <Image source={require("../assets/3color.jpg")} style={{position:"absolute",resizeMode:"contain",marginLeft:"65%"}} />
          </View>
          <View style={{width:"100%",flexDirection:"row"}}>
            <Text style={{color:"white",top:-25,fontWeight:"bold",marginLeft:"2%"}}>
              Adventure
            </Text>
            <Text style={{color:"white",top:-25,position:"absolute",marginLeft:"34.5%",fontWeight:"bold"}}>
              Historical
            </Text>
            <Text style={{color:"white",top:-25,position:"absolute",marginLeft:"69%",fontWeight:"bold"}}>
              Inspirational
            </Text>
          </View>
          <View style={{flexDirection:"row",width:"100%",marginTop:-5}}>
           <Image source={require("../assets/4color.jpg")} style={{resizeMode:"contain"}} />
           <Image source={require("../assets/6color.jpg")} style={{position:"absolute",resizeMode:"contain",marginLeft:"27%"}} />
           <Image source={require("../assets/5color.jpg")} style={{position:"absolute",resizeMode:"contain",marginLeft:"65%"}} />
          </View>
          <View style={{width:"100%",flexDirection:"row"}}>
            <Text style={{color:"white",top:-25,fontWeight:"bold",marginLeft:"2%"}}>
              Literature
            </Text>
            <Text style={{color:"white",top:-25,position:"absolute",marginLeft:"34.5%",fontWeight:"bold"}}>
              Reference
            </Text>
            <Text style={{color:"white",top:-25,position:"absolute",marginLeft:"69%",fontWeight:"bold"}}>
              Short Stories
            </Text>
          </View>
       </View>

        {/* ....... texts starts from here............ */}

          {/* ....... 1st text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>Art</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>

           {/* ....... 2nd text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>Biography</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>

            {/* ....... 3rd text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>Business</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>

            {/* ....... 4th text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>Chick-lit</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>

            {/* ....... 5th text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>Children's</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>

            {/* ....... 6th text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>Christian</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>

            {/* ....... 7th text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>Classic</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>

            {/* ....... 8th text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>Comics</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>

            {/* ....... 9th text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>Contemprorary</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>

            {/* ....... 10th text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>Cookbooks</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>

            {/* ....... 11th text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>Crime</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>

            {/* ....... 12th text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>Fantasy</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>

            {/* ....... 13th text.............................. */}

          <TouchableOpacity style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",}}>
           <Text style={{marginLeft:"5%",fontSize:17}}>BusinFictioness</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:"5%"}}/>
           </TouchableOpacity>
           <Divider style={{alignSelf:"center",height:1,width:"94%"}}/>
       <View style={{justifyContent:"center",alignItems:"center",width:"100%",marginTop:"10%"}}>
        <Text style={{borderWidth:1,width:"80%",textAlign:"center",fontSize:12,letterSpacing:.5,textAlignVertical:"center",fontWeight:"bold",height:40}}>
          SHOW MORE LISTS
        </Text>
       </View>
       
      </ScrollView>  
      
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
    elevation:5
  }
})

export default search;