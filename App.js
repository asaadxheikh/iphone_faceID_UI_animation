


import React, { useEffect, useRef, useState } from 'react'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,FlatList,
  Dimensions,Image,TextInput,TouchableOpacity
} from 'react-native';  
  
import {Canvas, Circle} from "@shopify/react-native-skia";
const App =() => {
 
  const [data,setData]=useState([])

  const model={
    name:'',
    nameError:'',
    email:'',
    emailError:'',
    password:'',
    passwordError:''
  }  
  
  return ( 
<> 
    <StatusBar barStyle={'light-content'} />
    <SafeAreaView style={{backgroundColor:'#000'}}>

    </SafeAreaView> 
      <View style={{ 
        width:'100%',
        height:'100%',
        backgroundColor:'#fff'
      }}>
 

      <FlatList

      data={data}
      ListHeaderComponent={
        ()=>{
          return(
            <>
            <View style={{
              width:'100%',
              height:50,
              flexDirection:'row',
              justifyContent:'space-between',
              paddingVertical:20,
              paddingHorizontal:20
            }}>
              <View style={{
                width:30,
                aspectRatio:1,
                borderRadius:15,
                backgroundColor:'black',
                justifyContent:'center',alignItems:'center'
              }} >
                <Text style={{
                  color:'#fff',
                  fontSize:22
                }}
                onPress={
                  ()=>{
                    setData((previousArr) => (previousArr.slice(0, -1)));
                  }
                }
                >
                  -
                </Text>
                </View>
                 <View style={{
                width:30,
                height:30,
                borderRadius:15,
                backgroundColor:'black',
                justifyContent:'center',alignItems:'center'
              }} >
                <Text style={{
                  color:'#fff',
                  fontSize:22
                }}
                onPress={
                  ()=>{
                    setData([...data,model])
                  }
                }
                >
                  +
                </Text>

                </View>
                

              </View>
               <View
               style={{
                 height:1,
                 width:'100%',
                 backgroundColor:'black',
                 marginTop:10
               }}


         />
            
         </>
          )
        }
      }


      renderItem={
        ({item,index})=>{
          return(
            <View style={{
              width:'100%',
              paddingHorizontal:20
            }}>

              <Text style={{
                paddingVertical:10
              }}>
                Employees form {index+1}
              </Text>
              <TextInput
              placeholder='Name'
              style={{
                width:'100%',
                height:50,
                borderRadius:10,
                borderWidth:1,
                borderColor:'#222',paddingHorizontal:20
              }}

              value={item.name}
              onChangeText={
                (e)=>{
                  let da = [...data];
                  da[index].name=e 
                   
                  if(da[index].name.length<5)
                  da[index].nameError='invalid name'
                  else 
                  da[index].nameError=''

                  setData(da)

                }
              }


              />
              <Text style={{
                color:'red',
                paddingVertical:10
              }}>
                {item.nameError}
              </Text>
              <TextInput
              placeholder='Email'
              style={{
                width:'100%',
                height:50,
                borderRadius:10,
                borderWidth:1,
                borderColor:'#222',paddingHorizontal:20
              }}
              value={item.email}
              onChangeText={
                (e)=>{
                  let da = [...data];
                  da[index].email=e 
               if(!  String(e)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){

      da[index].emailError='invalid email'
    }
    else
    da[index].emailError=''

                  setData(da)

                }
              }
              />
              <Text style={{
                color:'red',
                paddingVertical:10
              }}>
                {item.emailError}
              </Text>

              <TextInput
              placeholder='Password'
              style={{
                width:'100%',
                height:50,
                borderRadius:10,
                borderWidth:1,
                borderColor:'#222',paddingHorizontal:20
              }}
              value={item.password}
              secureTextEntry
              onChangeText={
                (e)=>{
                  let da = [...data];
                  da[index].password=e 
                  if(da[index].password.length<5)
                  da[index].passwordError='invalid password'
                  else 
                  da[index].passwordError=''
                  setData(da)

                }
              }
              />
              <Text style={{
                color:'red',
                paddingVertical:10
              }}>
                {item.passwordError}
              </Text>

              <TouchableOpacity style={{
                width:'100%',
                height:50,
                backgroundColor:'orange',
                borderRadius:10,
                justifyContent:'center',
                alignItems:'center'

              }}>
                <Text style={{
                  color:'#fff',
                  fontSize:20
                }}>
                  Send
                </Text>

              </TouchableOpacity>
            
            </View>
          )
        }
      }

ItemSeparatorComponent={
  ()=>{
    return(
     
      <View style={{
        width:'100%',
        height:1,
        backgroundColor:'#222',
        marginVertical:10
      }}>

        </View>
    )
  }
}

      />

         
     
        
      </View>
        
   </>
)
};
 

export default App;
  {/* <RNCamerar
         
          style={{
            width:'100%',
            height:'70%',
          }}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          
          
        /> */}

 