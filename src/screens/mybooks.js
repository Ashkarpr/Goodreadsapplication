import { Divider, RadioButton,Text } from 'react-native-paper';
import { red } from 'chalk';
import { lightgray } from 'color-name';
import React, {useState} from 'react';
import {View,ScrollView,TextInput, TouchableOpacity,Image,StyleSheet,Modal} from 'react-native';
import * as Progress from 'react-native-progress';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { color } from 'react-native-elements/dist/helpers';

const mybooks = ({navigation})=>
{
 
  const [seemodal, setmodal] = useState(false)
  const [tagmodal, settagmodal] = useState(false)
  const [checked, setChecked] = useState('first');

  return( 
      <View style={{flex:1,backgroundColor:"lightgray"}}>

      {/* ....Shelves modal................ */}
    
         <Modal transparent={true} visible ={seemodal} animationType ="slide" style={style.modalView} >
           <View  onPress ={()=> setmodal (false)} style={{backgroundColor: 'rgba(0,0,0,0.5)',flex:1,width:"100%",alignItems:"center",justifyContent:"center"}}>
            
         <View style={{width:"90%",alignSelf:"center",justifyContent:"center",alignItems:"center",backgroundColor:"white",height:180}} onPress ={()=> setmodal (false)}>
           <Text style={{fontWeight:"bold",marginLeft:"5%",fontSize:16,alignSelf:"flex-start"}} > What are you reading?</Text>
           <Text style={{marginTop:"2%",fontSize:17,alignSelf:"flex-start",marginLeft:"5%"}} >
             To update your reading progress, first{"\n"}
             add a book to your Currently Reading{"\n"}
             shelf. Then you can share your progress{"\n"}
             and ideas as you read.
           </Text>
           <View style={{flexDirection:"row",justifyContent:"flex-end",marginTop:"3%",paddingRight:"5%",flexWrap:"wrap",width:"100%"}}>
             <TouchableOpacity style={{}}>
               <Text style={{color:"green",fontWeight:"bold",marginLeft:"10%"}}>
                 SEARCH FOR BOOKS
               </Text>
             </TouchableOpacity>
             <TouchableOpacity  onPress ={()=> setmodal (false)} style={{width:"100%"}} style={{}}>
             <Text style={{color:"green",fontWeight:"bold"}}>
               DISMISS
             </Text>
             </TouchableOpacity>
           </View>
          </View>
         
          </View>
        </Modal>

      {/* ....tags modal................ */}

      <Modal transparent={true} visible ={tagmodal} animationType ="slide" style={style.modalView} >
           <View  style={{backgroundColor: 'rgba(0,0,0,0.5)',flex:1,width:"100%",alignItems:"center",justifyContent:"center"}}>
           <View style={{backgroundColor:"darkgreen",width:"77%",height:70,justifyContent:"center",paddingLeft:"5%"}}>
               <Text style={{color:"white",fontWeight:"800",fontSize:25}}> 
                 Create new
               </Text>
             </View>
          <View style={{padding:"1%",width:"77%",alignSelf:"center",justifyContent:"center",alignItems:"center",backgroundColor:"white",height:270}} onPress ={()=> setmodal (false)}>
           <View style={{flexDirection:"row",alignSelf:"flex-start",position:"absolute",top:"5%",marginLeft:"5%"}}>
            <RadioButton
              value="first"
              status={ checked === 'first' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('first')} />
            <Text style={{textAlignVertical:"center",paddingRight:"15%"}}>Tag</Text>

            <RadioButton
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')}/>
              <Text style={{textAlignVertical:"center"}}>Shelf</Text>
          </View>
          <View style={{padding:"3%",position:"absolute",alignSelf:"flex-start",alignItems:"center",width:"100%",top:"20%"}}>
          <Text style={{fontSize:13,alignSelf:"center"}}>
            Add as many tags to a book as you like. Try{"\n"}
            creating a tag like magic-realism, african writers{"\n"}
            or female-protagonist
          </Text>
          </View>
          <View style={{width:"100%",position:"absolute",top:"50%",alignItems:"center",justifyContent:"center"}}>
          <TextInput placeholder="Tag name (e.g modern-heroine)" style={{fontSize:17,textAlignVertical:"bottom",width:"95%"}}/>
          <Divider style={{position:"absolute",top:"82%",width:"92%",height:2,backgroundColor:"green",}}/>
          </View>
           <View style={{flexDirection:"row",justifyContent:"flex-end",position:"absolute",bottom:"15%",paddingRight:"20%",flexWrap:"wrap",width:"100%"}}>
             <TouchableOpacity onPress ={()=> settagmodal (false)} style={{}}>
               <Text style={{color:"green",fontWeight:"bold",marginLeft:"30%"}}>
                 CANCEL
               </Text>
             </TouchableOpacity>
             <TouchableOpacity  onPress ={()=> settagmodal (false)} style={{width:"100%"}} style={{}}>
             <Text style={{color:"green",fontWeight:"bold"}}>
               SAVE
             </Text>
             </TouchableOpacity>
           </View>
          </View>
         
          </View>
        </Modal>

      {/* ....BODY OF THE PAGE................... */}

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

        <ScrollView style={{}}>
        <ScrollView style={{width:"100%",backgroundColor:"white",height:"100%",marginBottom:"12%"}}>

      {/* ..........View of text 2021 reading challenge............. */}

          <View style={{marginTop:"5%",alignItems:"center",width:"100%",}}>
          <Text style={{fontWeight:"bold",color:"black",fontSize:17,color:"black"}} >
            2021  READING  CHALLENGE
          </Text>
          <Divider style={{marginTop:"1%",borderRadius:20,width:"40%",height:3,borderColor:"red",}}/>
          </View>

         <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
          <View style={{width:"100%",height:170,alignItems:"center",justifyContent:"center"}}>
            <TouchableOpacity onPress={() => {navigation.navigate('readingchallenges')}} style={{flexDirection:"row",backgroundColor:"white",
                                      borderRadius:10,height:110,width:"90%",alignItems:"center",
                                      ...style.shadow}}>
             <TouchableOpacity style={{justifyContent:"center",alignItems:"center",borderRadius:50,width:"30%"}}>
              <Image source={require("../assets/reader.png")} style={{resizeMode:"contain",height:80,borderRadius:50,}}>
              </Image>
             </TouchableOpacity>
             <Text style={{position:"absolute",left:"30%",top:"25%",fontSize:14,fontWeight:"bold",letterSpacing:0.4,}}>
              You've read 0 of 50 books
             </Text>
             <Progress.Bar progress={0} width={190} style={{height:7,top:3,borderColor:"lightgray",}}/>
          <Text style={{top:3,left:10}}>0%</Text>    
            </TouchableOpacity >
          </View>

          <Text onPress={() => {navigation.navigate('shelves')}} style={{fontWeight:"bold",fontSize:20,marginTop:"2%"}}>
             SHELVES
           </Text>
           <Divider style={{width:"40%",height:3,marginTop:"1%"}}/>
           <TouchableOpacity onPress ={()=> setmodal(true)} style={{marginTop:"5%",borderWidth:0.5,alignItems:"center",justifyContent:"center",width:"75%",height:35}}>
            <Text style={{fontWeight:"bold",fontSize:15,color:"black",letterSpacing:.5,}}>
             Update your reading progress
            </Text>
           </TouchableOpacity>

           {/* ............1st pic............... */}

           <View style={{alignSelf:"flex-start",marginLeft:"5%",width:"100%"}}>
           <TouchableOpacity onPress={() => {navigation.navigate('read')}} style={{alignItems:"center",marginTop:"3%",flexDirection:"row"}}>  
            <Image source={require("../assets/A.png")} style={{resizeMode:"contain",}}/>
            <Text  style={{fontSize:17,left:8}}>Read</Text>
            <View style={{}}>
              <Text style={{right:"57%",top:"25%",color:"gray"}}>0 books</Text>
            </View>
            </TouchableOpacity>
           </View>
           <Divider style={{width:"90%",height:1}}/>

           {/* ............2nd pic............... */}

           <View style={{marginTop:-5,alignSelf:"flex-start",marginLeft:"5%",width:"100%"}}>
           <TouchableOpacity  onPress={() => {navigation.navigate('Currentlyreading')}} style={{alignItems:"center",marginTop:"3%",flexDirection:"row"}}>  
            <Image source={require("../assets/A.png")} style={{resizeMode:"contain",}}/>
            <Text style={{fontSize:17,left:8}}>Currently Reading</Text>
            <View style={{}}>
              <Text style={{right:"250%",top:"25%",color:"gray"}}>0 books</Text>
            </View>
            </TouchableOpacity>
           </View>
           <Divider style={{width:"90%",height:1}}/>

           {/* ............3rd pic............... */}

           <View style={{marginTop:-5,alignSelf:"flex-start",marginLeft:"5%",width:"100%"}}>
           <TouchableOpacity onPress={() => {navigation.navigate('wanttoread')}} style={{alignItems:"center",marginTop:"3%",flexDirection:"row"}}>  
            <Image source={require("../assets/book.jpg")} style={{resizeMode:"contain",}}/>
            <Text style={{fontSize:17,left:8}}>Want to Read</Text>
            <View style={{}}>
              <Text style={{right:"215%",top:"25%",color:"gray"}}>1 book</Text>
            </View>
            </TouchableOpacity>
           </View>
           <Divider style={{width:"90%",height:1}}/>
           <TouchableOpacity onPress={() => {navigation.navigate('shelves')}}>
             <Text style={{fontWeight:"bold",color:"green",marginTop:"5%",fontSize:18,}}>SEE ALL</Text>
           </TouchableOpacity>
           <Divider style={{width:"100%",height:1,marginTop:"5%"}}/>
           <Text style={{marginTop:"5%",fontSize:18,fontWeight:"bold"}}>
             TAGS
           </Text>
           <Divider style={{width:"40%",height:2,marginTop:"2%"}}/>
           <Text style={{textAlign:"center",marginTop:"5%",color:"gray"}}>
             You don't have any tags yet. Add as many tags as you {"\n"} like to categorise your books.
           </Text>
           <Divider style={{width:"100%",height:1,marginTop:"10%"}} />
           <TouchableOpacity onPress ={()=> settagmodal(true)} style={{marginTop:"5%",borderWidth:.5,width:"70%",height:50,justifyContent:"center"}}>
             <Text style={{textAlign:"center",fontSize:15,textAlignVertical:"center",fontWeight:"bold",}}>
               + Create a new tag or shelf
             </Text>
           </TouchableOpacity>
           <Text style={{fontSize:18,marginTop:"10%",fontWeight:"bold"}}>
             READING ACTIVITY
           </Text>
           <Divider style={{width:"40%",height:2,marginTop:"1%"}} />
           <Divider style={{width:"100%",height:1}} />

           {/* ....... texts starts from here............ */}

          {/* ....... 1st text.............................. */}

           <TouchableOpacity onPress={() => {navigation.navigate('kindle')}} style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",marginTop:"8%"}}>
           <Text style={{marginLeft:"5%",fontSize:18}}>Kindle Notes & Highlites</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:10}}/>
           </TouchableOpacity>
           <Divider style={{marginTop:"2%",height:1,width:"94%"}}/>

           {/* ....... 2nd text.............................. */}
          
           <TouchableOpacity onPress={() => {navigation.navigate('readingchallenges')}} style={{height:50,width:"100%",flexDirection:"row",alignItems:"center",marginTop:"5%"}}>
           <Text style={{marginLeft:"5%",fontSize:18}}>Reading Challenges</Text>
           <Feather name="chevron-right" size={25} style={{position:"absolute",right:10}}/>
           </TouchableOpacity>
           <Divider style={{marginTop:"2%",height:1,width:"94%"}}/>

           {/* ....... 3rd text.............................. */}
           <TouchableOpacity onPress={() => {navigation.navigate('edityourfavpage')}} style={{height:160,paddingBottom:110,width:"100%",flexDirection:"row",alignItems:"center",marginTop:"5%"}}>
           <Text style={{marginLeft:"5%",fontSize:18}}>Edit your favourite geres</Text>
           <Feather name="chevron-right" size={25} style={{paddingBottom:110,position:"absolute",right:10}}/>
           </TouchableOpacity>
          
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
    elevation:20
  },

  modalView: {
    
    flex:1,
    justifyContent:"center",
    width:"100%"
 },
})

export default mybooks;