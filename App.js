


import React, { useEffect, useRef, useState } from 'react'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
  Dimensions,Image
} from 'react-native'; 
import { RNCamera } from 'react-native-camera';
import Svg,
  {G,Path, 
  } from 'react-native-svg'
import Animated, { useSharedValue, 
  useAnimatedStyle,Easing, withTiming,
   withRepeat, withSpring ,withDelay} from 'react-native-reanimated';
 
import Square from './src/components/square'; 
  

const App =() => {
  const camref=useRef(null)
  const[ capturedImage,setCaptureImage]=useState('')
  const offset = useSharedValue(6);  
  const scaleFocus = useSharedValue(2.3);  
  const offsetX = useSharedValue(0);  
  const offsetY = useSharedValue(0);  
  const moveTextToLeft=useSharedValue(0)
  const moveTextRightToLeft=useSharedValue(800)
  const moveThirdTextRightToLeft=useSharedValue(800)
  const totalBlocks = useSharedValue(100);
  const actionOpacity = useSharedValue(0);
  const cameraBorderOpacity=useSharedValue(0)
  const continueButton=useSharedValue(500)
  const scanOpacity=useSharedValue(1)

   


  const animated2= useAnimatedStyle(() => { 
    return { 
        transform: [{ scale: offset.value }],   
    };
  });
  const focusScale= useAnimatedStyle(() => { 
    return { 
        transform: [{ scale: scaleFocus.value }],   
    };
  });
  
  const animated3= useAnimatedStyle(() => { 
    return { 
        transform: [{ rotateX:  `${offsetX.value}rad` }],   
        opacity:scanOpacity.value
    };
  });
  const animated4= useAnimatedStyle(() => { 
    return { 
        transform: [{ rotateY:  `${offsetY.value}rad` }],  
        opacity:scanOpacity.value 
    };
  });
  const moveText= useAnimatedStyle(() => { 
    return { 
        transform: [{ translateX:moveTextToLeft.value }],   
    };
  });
  const moveSecondText= useAnimatedStyle(() => { 
    return { 
        transform: [{ translateX:moveTextRightToLeft.value }],   
    };
  });
  const   moveThirdText  = useAnimatedStyle(() => { 
    return { 
        transform: [{ translateX:moveThirdTextRightToLeft.value }],   
    };
  });
  const actionStyle= useAnimatedStyle(() => { 
    return { 
        opacity: actionOpacity.value,   
    };
  });
  const borderStyle= useAnimatedStyle(() => { 
    return { 
        opacity: cameraBorderOpacity.value,   
    };
  });
  const moveContinueButton= useAnimatedStyle(() => { 
    return { 
      transform: [{ translateY:continueButton.value }],  
    };
  });

   useEffect(
    ()=>{
      offset.value=  withDelay(2000, withSpring(2.3));  
      offsetX.value=  withDelay(2000,
        withRepeat( 
          withTiming(4,{duration:3000, easing:Easing.ease,}),-1,true));  
    
    offsetY.value=  withDelay(2000,
      withRepeat( 
        withTiming(4,{duration:3000, easing:Easing.ease,}),-1,true));  

        moveTextToLeft.value=  
          withDelay(2000,withSpring(-700))

        moveTextRightToLeft.value=  
        withDelay(2000,withSpring(0))
        moveTextRightToLeft.value=  
        withDelay(10000,withSpring(-700))
        moveThirdTextRightToLeft.value=  
        withDelay(10000,withSpring(0))
        actionOpacity.value=  
        withDelay(2000,withSpring(1)) 
        actionOpacity.value=  
        withDelay(10000,withSpring(0)) 
        cameraBorderOpacity.value=  
        withDelay(2200,withSpring(1))
        continueButton.value=  
        withDelay(10000,withSpring(0)) 
       scanOpacity.value=  
        withDelay(10000,withSpring(0))
      }
   ,
    []
  )
  const progress = useSharedValue(0); 
  useEffect(() => {
    progress.value = withRepeat(
      withTiming(4 * Math.PI, {
        duration: 8000,
        easing: Easing.linear,
      }),
      -1
    );
  }, []);

  useEffect(
    ()=>{
      setTimeout(async()=>{
        const options = { quality: 0.5, base64: true };
      const data= await camref.current.takePictureAsync(options);
      setCaptureImage(data.uri);
      },8000)

    },[]
  )
 
  
  return ( 
<> 
    <StatusBar barStyle={'light-content'} />
    <SafeAreaView style={{backgroundColor:'#000'}}>

    </SafeAreaView> 
      <View style={{
        justifyContent:"center",
        alignItems:'center',
        width:'100%',
        height:'100%',
        
      }}>
        <RNCamera
         ref={camref}
         style={{
           width:'100%',
           height:'100%',
           justifyContent:"center",
        alignItems:'center', 
         }}
         type={RNCamera.Constants.Type.front}
         flashMode={RNCamera.Constants.FlashMode.off}
         
         
       >
     
          <View style={{
            height:'12%',
            width:'100%',
            backgroundColor:'#000',
            alignItems:'flex-start',
            paddingHorizontal:20

          }}>
            
            
            <Button
            title='Cancel'

        />

          </View>
         
         <Animated.View 
         style={[
           {
             width:'100%',
             height:'45%', 
             justifyContent:'center',
             alignItems:'center', 
             
           }]}
         >
 
           <Animated.View  
           style={[
           {
             width:'100%',
             height:'100%', 
             justifyContent:'center',
             alignItems:'center', 
             
           }
         ,animated2]}>
 
  
 <Svg width="555" height="172" viewBox="0 0 556 172" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fillRule="evenodd" clipRule="evenodd" d="M555 0H0V172H555V0ZM278 146C311.137 146 338 119.137 338 86C338 52.8633 311.137 26 278 26C244.863 26 218 52.8633 218 86C218 119.137 244.863 146 278 146Z" fill="black"/>
</Svg>
 
<Animated.View style={[{
             width:100,
             height:100,
             borderRadius:100,  
             position:'absolute',
             justifyContent:'center',
             alignItems:'center',
           },borderStyle]}>
            
             
            

           
      <Animated.View style={[
        {width:120,
        height:120, 
        justifyContent:'center',
        position:'absolute'
      
      }, animated3
      ]}>
  <Image style={{
   width:120,
   height:120
 }} source={require('./src/media/sert.png')}/>
{/* 
<Svg width="100" height="100" viewBox="0 0 309 318" fill="none" xmlns="http://www.w3.org/2000/svg">
<G filter="url(#filter0_f_1180_127)">
<Path d="M304 154C304 236.843 236.843 304 154 304C71.1573 304 4 236.843 4 154C4 71.1573 71.1573 4 154 4C236.843 4 304 71.1573 304 154ZM8.05 154C8.05 234.606 73.394 299.95 154 299.95C234.606 299.95 299.95 234.606 299.95 154C299.95 73.394 234.606 8.05 154 8.05C73.394 8.05 8.05 73.394 8.05 154Z" fill="url(#paint0_linear_1180_127)"/>
<Path d="M305 164C305 246.843 237.843 314 155 314C72.1573 314 5 246.843 5 164C5 81.1573 72.1573 14 155 14C237.843 14 305 81.1573 305 164ZM9.05 164C9.05 244.606 74.394 309.95 155 309.95C235.606 309.95 300.95 244.606 300.95 164C300.95 83.394 235.606 18.05 155 18.05C74.394 18.05 9.05 83.394 9.05 164Z" fill="url(#paint1_linear_1180_127)"/>
<Path d="M304 159C304 241.843 236.843 309 154 309C71.1573 309 4 241.843 4 159C4 76.1573 71.1573 9 154 9C236.843 9 304 76.1573 304 159ZM8.05 159C8.05 239.606 73.394 304.95 154 304.95C234.606 304.95 299.95 239.606 299.95 159C299.95 78.394 234.606 13.05 154 13.05C73.394 13.05 8.05 78.394 8.05 159Z" fill="url(#paint2_linear_1180_127)"/>
</G>
<Defs> */}
{/* <Filter id="filter0_f_1180_127" x="0" y="0" width="309" height="318" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<FeFlood flood-opacity="0" result="BackgroundImageFix"/>
<FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<FeGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1180_127"/>
</Filter> */}
{/* <LinearGradient id="paint0_linear_1180_127" x1="154" y1="13" x2="154" y2="159" gradientUnits="userSpaceOnUse">
<Stop stopColor="#09E1FF"/>
<Stop offset="0.505457" stopColor="#40F3FE"/>
<Stop offset="0.995898" stopColor="#3FFFFF" stopOpacity="0"/>
</LinearGradient>
<LinearGradient id="paint1_linear_1180_127" x1="154" y1="13" x2="154" y2="159" gradientUnits="userSpaceOnUse">
<Stop stopColor="#09E1FF"/>
<Stop offset="0.505457" stopColor="#40F3FE"/>
<Stop offset="0.995898" stopColor="#3FFFFF" stopOpacity="0"/>
</LinearGradient>
<LinearGradient id="paint2_linear_1180_127" x1="154" y1="13" x2="154" y2="159" gradientUnits="userSpaceOnUse">
<Stop stopColor="#09E1FF"/>
<Stop offset="0.505457" stopColor="#40F3FE"/>
<Stop offset="0.995898" stopColor="#3FFFFF" stopOpacity="0"/>
</LinearGradient>
</Defs>
</Svg> */}




      </Animated.View>

      <Animated.View style={[
        {width:120,
        height:120, 
        justifyContent:'center',
        position:'absolute'
      
      }, animated4
      ]}>
 <Image style={{
   width:120,
   height:120  
 }} source={require('./src/media/Vector.png')}/>


      </Animated.View>


           </Animated.View>

 
        
 
           </Animated.View>


           <Animated.View style={[{
             width:100,
             height:100,
             borderRadius:10,  
             position:'absolute',
             justifyContent:'center',
             alignItems:'center', 
             
           },focusScale]}>
            {new Array(totalBlocks.value).fill(0).map((_, index) => {
        return <Square  key={index} progress={progress} index={index} N={totalBlocks.value}/>;
      })}
     
     

             
             </Animated.View>


         </Animated.View>

         <View style={{
            height:'43%',
            width:'100%',
            backgroundColor:'#000',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
            <View style={{ 
             
             flexDirection:'row',
             justifyContent:'center', 
             marginTop:20
            }}>
              <Animated.Text style={[{
                color:'#fff',
                fontSize:23,
                textAlign:'center',
                position:'absolute'
              },moveText]}>
              Position your face {'\n'} within the frame
              </Animated.Text>
              <Animated.Text style={[{
                color:'#fff',
                fontSize:23,
                textAlign:'center',
                position:'absolute'
              },moveSecondText]}>
              Move your head slowly to {'\n'} complete the circle
              </Animated.Text>
              <Animated.Text style={[{
                color:'#fff',
                fontSize:23,
                textAlign:'center',
                position:'absolute'
              },moveThirdText]}>
              Face ID {'\n'} scan complete
              </Animated.Text>
            </View>

              <View style={{
                marginBottom:100,
                width:'100%',
                alignItems:'center'
              }}>
                 
            <Animated.View  style={[{
                marginBottom:0, 
            },actionStyle]}>
              <Button
                title='Accessibility Option' 
              />
            </Animated.View>
            <Animated.View style={[{
              width:'86%',
              height:50,
              backgroundColor:'#007AFF',
              borderRadius:6,
              justifyContent:'center', 
              alignItems:'center',  
            },moveContinueButton]}>
              <Text style={{
                color:'#fff',
                fontSize:22,
                fontWeight:'400'
              }}>
                Continue
              </Text>


            </Animated.View>

            </View>

          </View>
          
          </RNCamera>
 
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


const styles = StyleSheet.create({
  container: {
    transform: [{ rotateZ: "270deg" }],
  },
});