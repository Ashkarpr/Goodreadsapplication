import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

const mybooks = ()=>
{
  return(
    <View style={{flex:1,flexWrap:"wrap",backgroundColor:"transparent",alignItems:"center"}}>
       <View style={{width:"100%",position:"absolute",bottom:"0%",paddingBottom:"20%",backgroundColor:"white",alignItems:"center",}}>
         
         {/* .......1st raw....................... */}
         
         <View style={{paddingHorizontal:"5%",flexDirection:"row",}}>
          <TouchableOpacity style={{marginTop:"10%",}}>
            <Image  source={require("../assets/user.jpg")}  style={{resizeMode:"contain",borderRadius:40,}} />
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>My profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:"5%",marginTop:"10%"}}>
            <Image  source={require("../assets/frnd.png")}  style={{resizeMode:"contain",borderRadius:40,}} />
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:"5%",marginTop:"10%"}}>
            <Image  source={require("../assets/grps.png")}  style={{resizeMode:"contain",borderRadius:40,}} />
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Groups</Text>
          </TouchableOpacity>
         </View>

{/* ...................2nd raw............ */}

        <View style={{paddingHorizontal:"5%",flexDirection:"row",}}>
          <TouchableOpacity style={{marginTop:"10%"}}>
            <Image  source={require("../assets/rds.jpg")}  style={{resizeMode:"contain",borderRadius:40,}} />
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Reading{"\n"}Challenge</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:"5%",marginTop:"10%"}}>
            <Image  source={require("../assets/toppicks.png")}  style={{resizeMode:"contain",borderRadius:40,}} />
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Top picks{"\n"}for you</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:"5%",marginTop:"10%"}}>
            <Image  source={require("../assets/12.png")}  style={{resizeMode:"contain",borderRadius:40,}} />
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Best books{"\n"}of 2020</Text>
          </TouchableOpacity>
         </View>

        {/* ...................3rd raw............ */}

        <View style={{paddingHorizontal:"5%",flexDirection:"row",}}>
          <TouchableOpacity style={{marginTop:"10%"}}>
            <Image  source={require("../assets/camera.jpg")}  style={{resizeMode:"contain",borderRadius:40,}} />
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>My profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:"5%",marginTop:"10%"}}>
            <Image  source={require("../assets/stgs.png")}  style={{resizeMode:"contain",borderRadius:40,}} />
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:"5%",marginTop:"10%"}}>
            <Image  source={require("../assets/hlp.jpg")}  style={{resizeMode:"contain",borderRadius:40,}} />
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:15}}>Groups</Text>
          </TouchableOpacity>
         </View>


       </View>
    </View>
  )
}
export default mybooks;