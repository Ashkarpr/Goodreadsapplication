import React, {useState} from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import {View,ScrollView,Modal,TextInput, TouchableOpacity,Image,StyleSheet,Text, SafeAreaView} from 'react-native';
import { Divider, RadioButton } from 'react-native-paper';

const home = ({navigation})=>
{
    const [tagmodal, settagmodal] = useState(false)
    const [checked, setChecked] = useState('first');

  return(
   
    <View style={{flex:1,alignItems:"center",width:"100%"}}>

        <Modal transparent={true} visible ={tagmodal} animationType ="slide" style={style.modalView} >
            
           <View  style={{backgroundColor: 'rgba(0,0,0,0.5)',padding:"5%",flex:1,width:"100%",alignItems:"center",justifyContent:"center"}}>
            <ScrollView style={{backgroundColor:"red",width:"100%"}}>
                <View style={{alignItems:"flex-start",backgroundColor:"white",width:"100%",paddingBottom:"5%",}} >
                    <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{color:"gray"}}>
                        More Genres
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton
                            disabled="0"
                            color="black"
                            value="first"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('first')} 
                            />
                        </View>
                    </View>
                        <Divider style={{width:"100%", height:2}} /> 

                        
                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Art
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton
                            color="black"  
                            value="Art"
                            status={ checked === 'Art' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Art')}
                            onPress={() => settagmodal(false)} />
                        </View>
                    </View>
                        <Divider style={{width:"100%", height:2}} /> 
                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Biography
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            color="black" 
                            value="Biography"
                            status={ checked === 'Biography' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Biography')}
                            onPress={() => settagmodal(false)} />
                        </View>
                    </View>
                        <Divider style={{width:"100%", height:2}} /> 

                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Business
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            color="black" 
                            value="Business"
                            status={ checked === 'Business' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Business')}
                            onPress={() => settagmodal(false)} />
                        </View>
                    </View> 

                         <Divider style={{width:"100%", height:2}} />

                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Check-lit
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            color="black" 
                            value="Check-lit"
                            status={ checked === 'Check-lit' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Check-lit')} 
                            onPress={() => settagmodal(false)}/>
                        </View>
                    </View>
                        <Divider style={{width:"100%", height:2}} />                         

                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Children's
                        </Text>
                        <View onPress={() => settagmodal(false)} style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            color="black" 
                            value="Childrens"
                            status={ checked === 'Childrens' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Childrens')}
                            onPress={() => settagmodal(false)}/>
                        </View>
                    </View>
                        
                        
                        <Divider style={{width:"100%", height:2}} />

                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Christian
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            value="Christian"
                            status={ checked === 'Christian' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Christian')}
                            onPress={() => settagmodal(false)} />
                        </View>
                    </View>
                        <Divider style={{width:"100%", height:2}} />                         

                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Classics
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            color="black" 
                            value="Classics"
                            status={ checked === 'Classics' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Classics')}
                            onPress={() => settagmodal(false)} />
                        </View>
                    </View>
                        <Divider style={{width:"100%", height:2}} />                         

                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Comics
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            color="black" 
                            value="Comics"
                            status={ checked === 'Comics' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Comics')} 
                            onPress={() => settagmodal(false)}/>
                        </View>
                    </View>
                        <Divider style={{width:"100%", height:2}} />                         

                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Contemporary
                        </Text>
                        <View onPress={() => settagmodal(false)} style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            color="black" 
                            value="Contemporary"
                            status={ checked === 'Contemporary' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Contemporary')} 
                            onPress={() => settagmodal(false)}/>
                        </View>
                    </View>
                        <Divider style={{width:"100%", height:2}} />                         

                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Cookbooks
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            color="black" 
                            value="Cookbooks"
                            status={ checked === 'Cookbooks' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Cookbooks')}
                            onPress={() => settagmodal(false)}/>
                        </View>
                    </View>
                        <Divider style={{width:"100%", height:2}} />                         

                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Crime
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            color="black" 
                            value="Crime"
                            status={ checked === 'Crime' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Crime')} 
                            onPress={() => settagmodal(false)}/>
                        </View>
                    </View>
                        <Divider style={{width:"100%", height:2}} />                         

                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Ebooks
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            value="Ebooks"
                            status={ checked === 'Ebooks' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Ebooks')}
                            onPress={() => settagmodal(false)} />
                        </View>
                    </View>
                        <Divider style={{width:"100%", height:2}} />                         

                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Fantasy
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            color="black" 
                            value="Fantasy"
                            status={ checked === 'Fantasy' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Fantasy')}
                            onPress={() => settagmodal(false)}/>
                        </View>
                    </View>
                        <Divider style={{width:"100%", height:2}} />                         

                        <View style={{flexDirection:"row",padding:"5%",alignItems:"flex-start",width:"100%"}}>
                        <Text onPress={() => settagmodal(false)} style={{}}>
                            Fiction
                        </Text>
                        <View style={{position:"absolute",top:"30%",right:"0%"}}>
                            <RadioButton 
                            color="black" 
                            value="Fiction"
                            status={ checked === 'Fiction' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Fiction')}
                            onPress={() => settagmodal(false)}/>
                        </View>
                    </View>
                                            
                </View>

                
          </ScrollView>
          </View>
        </Modal>

       <View style={{...style.shadow,flexDirection:"row", width:"100%",height:70,backgroundColor:"#fdf5e6",alignItems:"center",paddingLeft:"5%"}}>
          <View style={{padding:5,alignItems:"center",flexDirection:"row",height:40,width:"85%",borderRadius:30}}>
           <TouchableOpacity onPress={() => {navigation.navigate('search')}}>
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
              
              <View style={{...style.shadow,alignItems:"center",height:40,flexDirection:"row",backgroundColor:"white",width:"100%",borderWidth:1.5,borderColor:"lightgray",borderRadius:3}}>
                 <Ionicons name="search"  style={{fontSize:23,color:"black",marginLeft:"2%"}}/>
                 <TextInput placeholder="Find a genre by name" style={{width:"80%",marginLeft:"1%",fontSize:15,}}/>
               </View>

               <View style={{marginTop:"2%",width:"100%",flexDirection:"row"}}>
                    <TouchableOpacity>
                        <Text style={{color:"#4dab4d"}}>
                            Genres
                        </Text>
                    </TouchableOpacity>
                    <Text style={{marginLeft:"1%",marginTop:".2%"}}>
                        {">"}
                    </Text>
                    <TouchableOpacity style={{marginLeft:"1%"}}>
                        <Text style={{color:"#4dab4d"}}>
                            Nonfiction
                        </Text>
                    </TouchableOpacity>
               </View>

               <View style={{backgroundColor:"white",}}>
                    <Text style={{fontWeight:"bold",color:"#383838",fontSize:27,marginTop:"1%"}}>
                        Art
                    </Text>
                    <TouchableOpacity style={{backgroundColor:"#fdf5e6",width:"50%",height:30,borderRadius:2,marginTop:"2%",borderWidth:.2,alignItems:"center",justifyContent:"center"}}>
                        <Text>
                            Add to Favourite Genres
                        </Text>
                    </TouchableOpacity>
                    <Divider style={{height:1.5,width:"100%",marginTop:"3%"}} />
               </View>

               <View style={{marginTop:"2%",width:"100%"}}>
                    <Text style={{fontWeight:"bold",}}>
                        NEW RELEASES
                    </Text>

                    {/* ...........1st ROW PICS ....... */}

                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"10%",width:"100%"}}> 
                       <View style={{padding:"4%",justifyContent:"center",alignItems:"center"}}>
                        <TouchableOpacity >
                            <Image source={require("../../assets/hu.jpg")} style={{height:150,width:100,resizeMode:"contain"}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{padding:"4%",justifyContent:"center",alignItems:"center"}}>
                        <TouchableOpacity >
                            <Image source={require("../../assets/b1.jpg")} style={{height:150,width:100,resizeMode:"contain"}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{padding:"4%",justifyContent:"center",alignItems:"center"}}>
                        <TouchableOpacity >
                            <Image source={require("../../assets/k5.jpg")} style={{height:150,width:100,resizeMode:"contain"}} />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={{backgroundColor:"#4dab4d",justifyContent:"center",alignItems:"center",marginLeft:"2%",borderRadius:2,height:30,width:"26%"}}>
                            <Text style={{color:"white"}}>
                                Want to Read
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:"#4dab4d",justifyContent:"center",alignItems:"center",marginLeft:"9%",borderRadius:2,height:30,width:"26%"}}>
                            <Text style={{color:"white"}}>
                                Want to Read
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:"#4dab4d",justifyContent:"center",alignItems:"center",marginLeft:"9%",borderRadius:2,height:30,width:"26%"}}>
                            <Text style={{color:"white"}}>
                                Want to Read
                            </Text>
                        </TouchableOpacity>
                    </View>
               </View>
               
               <View style={{ marginTop:"3%",alignItems:"center", justifyContent:"center",width:"100%"}}>
                    <TouchableOpacity style={{borderWidth:.2,backgroundColor:"lightgray",backgroundColor:"#fdf5e6",justifyContent:"center",alignItems:"center",borderRadius:3,height:30,width:"100%"}}>
                        <Text >
                               View all
                        </Text>
                    </TouchableOpacity>
                    <Divider style={{height:1, width:"102%", marginTop:"5%"}} />
               </View>

               <View style={{marginTop:"2%",width:"100%"}}>
                   <Text style={{fontWeight:"bold",}}>
                       RELATED GENRES
                   </Text>
               </View>

               <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                    <View style={{marginLeft:-3,paddingHorizontal:"2%",paddingVertical:"1%",alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{paddingHorizontal:"2%",height:30,width:"110%",justifyContent:"center",alignItems:"center",borderRadius:2,backgroundColor:"#f0ebdf"}}>
                            <Text style={{color:"green"}}>
                                Nonfiction
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingHorizontal:"2%",paddingVertical:"1%",alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{paddingHorizontal:"2%",height:30,width:"110%",justifyContent:"center",alignItems:"center",borderRadius:2,backgroundColor:"#f0ebdf"}}>
                            <Text style={{color:"green"}}>
                                Photography
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingHorizontal:"2%",paddingVertical:"1%",alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{paddingHorizontal:"2%",height:30,width:"110%",justifyContent:"center",alignItems:"center",borderRadius:2,backgroundColor:"#f0ebdf"}}>
                            <Text style={{color:"green"}}>
                                Art History
                            </Text>
                        </TouchableOpacity>
                    </View>
               </View>

               <View style={{marginLeft:-3,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                    <View style={{paddingHorizontal:"2%",paddingVertical:"1%",alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{paddingHorizontal:"2%",height:30,width:"110%",justifyContent:"center",alignItems:"center",borderRadius:2,backgroundColor:"#f0ebdf"}}>
                            <Text style={{color:"green"}}>
                                Art Design
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingHorizontal:"2%",paddingVertical:"1%",alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{paddingHorizontal:"2%",height:30,width:"110%",justifyContent:"center",alignItems:"center",borderRadius:2,backgroundColor:"#f0ebdf"}}>
                            <Text style={{color:"green"}}>
                                Drawing
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingHorizontal:"2%",paddingVertical:"1%",alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{paddingHorizontal:"2%",height:30,width:"110%",justifyContent:"center",alignItems:"center",borderRadius:2,backgroundColor:"#f0ebdf"}}>
                            <Text style={{color:"green"}}>
                                Visual Art
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingHorizontal:"2%",paddingVertical:"1%",alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{paddingHorizontal:"2%",height:30,width:"110%",justifyContent:"center",alignItems:"center",borderRadius:2,backgroundColor:"#f0ebdf"}}>
                            <Text style={{color:"green"}}>
                                Graffiti
                            </Text>
                        </TouchableOpacity>
                    </View>
               </View>

               <View style={{marginLeft:-3,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                    <View style={{paddingHorizontal:"2%",paddingVertical:"1%",alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{paddingHorizontal:"2%",height:30,width:"110%",justifyContent:"center",alignItems:"center",borderRadius:2,backgroundColor:"#f0ebdf"}}>
                            <Text style={{color:"green"}}>
                                Street Art
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingHorizontal:"2%",paddingVertical:"1%",alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{paddingHorizontal:"2%",height:30,width:"110%",justifyContent:"center",alignItems:"center",borderRadius:2,backgroundColor:"#f0ebdf"}}>
                            <Text style={{color:"green"}}>
                                Art Books Monographs
                            </Text>
                        </TouchableOpacity>
                    </View>
               </View>
               <Divider style={{width:"101%",height:1,marginTop:"1%"}} /> 
               <Divider style={{width:"101%",height:1,marginTop:"10%"}} /> 

               <View style={{marginTop:"2%",width:"100%"}}>
                   <Text style={{fontWeight:"bold",}}>
                       POPULAR
                   </Text>
                </View>

                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"5%",width:"100%"}}> 
                       <View style={{padding:"4%",justifyContent:"center",alignItems:"center"}}>
                        <TouchableOpacity >
                            <Image source={require("../../assets/g2.jpg")} style={{height:150,width:100,resizeMode:"contain"}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{padding:"4%",justifyContent:"center",alignItems:"center"}}>
                        <TouchableOpacity >
                            <Image source={require("../../assets/harry.jpg")} style={{height:150,width:100,resizeMode:"contain"}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{padding:"4%",justifyContent:"center",alignItems:"center"}}>
                        <TouchableOpacity >
                            <Image source={require("../../assets/g4.jpg")} style={{height:150,width:100,resizeMode:"contain"}} />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={{backgroundColor:"#4dab4d",justifyContent:"center",alignItems:"center",marginLeft:"2%",borderRadius:2,height:30,width:"26%"}}>
                            <Text style={{color:"white"}}>
                                Want to Read
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:"#4dab4d",justifyContent:"center",alignItems:"center",marginLeft:"9%",borderRadius:2,height:30,width:"26%"}}>
                            <Text style={{color:"white"}}>
                                Want to Read
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:"#4dab4d",justifyContent:"center",alignItems:"center",marginLeft:"9%",borderRadius:2,height:30,width:"26%"}}>
                            <Text style={{color:"white"}}>
                                Want to Read
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop:"3%",alignItems:"center", justifyContent:"center",width:"100%"}}>
                    <TouchableOpacity style={{borderWidth:.2,backgroundColor:"lightgray",backgroundColor:"#fdf5e6",justifyContent:"center",alignItems:"center",borderRadius:3,height:30,width:"100%"}}>
                        <Text >
                               View all
                        </Text>
                    </TouchableOpacity>
                    <Divider style={{height:1, width:"102%", marginTop:"5%"}} />
               </View>

               <View style={{marginTop:"2%",width:"100%"}}>
                   <Text style={{fontWeight:"bold",}}>
                       QUOTES
                   </Text>
                </View>

                <View style={{marginTop:"5%"}}>
                    <Text>
                        "You must have chaos within you to give birth to a dancing
                    </Text>
                    <View style={{flexDirection:"row"}}>
                        <Text>
                            star." - {""}
                        </Text>
                        <TouchableOpacity>
                            <Text style={{color:"green",textDecorationLine:"underline"}}>
                                Friedrich Nietzsche
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={{color:"green"}}>
                            6,197 people liked this
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop:"3%",alignItems:"center", justifyContent:"center",width:"100%"}}>
                    <TouchableOpacity style={{borderWidth:.2,backgroundColor:"lightgray",backgroundColor:"#fdf5e6",justifyContent:"center",alignItems:"center",borderRadius:3,height:30,width:"100%"}}>
                        <Text >
                               View all
                        </Text>
                    </TouchableOpacity>
                    <Divider style={{height:1, width:"102%", marginTop:"5%"}} />
                    <Divider style={{height:1, width:"102%", marginTop:"10%"}} />
               </View>
               <View style={{marginTop:"2%",width:"100%"}}>
                   <Text style={{fontWeight:"bold",}}>
                       LISTOPIA
                   </Text>
                </View>

                <View style={{width:"100%",alignItems:"center",justifyContent:"center",marginTop:"5%"}}>
                    <TouchableOpacity>
                        <Image source={require("../../assets/list.png")} style={{height:140,width:370}} />
                    </TouchableOpacity>
                    <View style={{alignSelf:"flex-start",flexDirection:"row"}}>
                        <TouchableOpacity>
                        <Text style={{color:"green"}}>
                            Best Book Cover Art 
                        </Text>
                        </TouchableOpacity>
                        <Text>
                            {" "}8,911 books
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop:"3%",alignItems:"center", justifyContent:"center",width:"100%"}}>
                    <TouchableOpacity style={{borderWidth:.2,backgroundColor:"lightgray",backgroundColor:"#fdf5e6",justifyContent:"center",alignItems:"center",borderRadius:3,height:30,width:"100%"}}>
                        <Text >
                               View all Lists
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress ={()=> settagmodal(true)} style={{flexDirection:"row",marginTop:"2%",borderWidth:.2,backgroundColor:"lightgray",backgroundColor:"#fdf5e6",alignItems:"center",paddingHorizontal:"2%",borderRadius:3,height:30,width:"100%"}}>
                        <Text >
                              More genres
                        </Text>
                        <Entypo name="chevron-small-down"  style={{position:"absolute",right:"2%",fontSize:23,color:"black"}}/>
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
      height:5
    },
    shadowOpacity:0.50,
    shadowRadius:10,
    elevation:17
  }
})

export default home;