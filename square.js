
import React ,{useEffect,useState}from 'react';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue, 
  withDelay,
  withSpring,
  withTiming,Easing, color
} from 'react-native-reanimated';  
import {  SQUARE_SIZE } from './constants';
 
const Square = ({ index, progress,N }) => {
  const offsetAngle = (-2*Math.PI) / N;
  const finalAngle = offsetAngle * (N - 1 - index);
  const squareWidth=useSharedValue(10)
  const squareHeight=useSharedValue(4)
  const blockColor=useSharedValue('white')

  const rotate = useDerivedValue(() => { 
      return finalAngle; 
  }, []);

  const translateY = useDerivedValue(() => { 
       return withSpring(-11* SQUARE_SIZE);
 
  });
 
  const [timedAnimate,setTimedAni]=useState(false)
useEffect(()=>{ setTimeout(()=>setTimedAni(true),3000)

},[])
  
  useEffect(()=>{  

   squareWidth.value= withDelay(200, withSpring(1))
    
   squareWidth.value= withDelay(8000, withSpring(5))
    
   if(timedAnimate){
     if(index<30||index>60)
    {squareHeight.value= withDelay(index*20,withTiming(10,{
      duration:500
    }) )
    blockColor.value= withDelay(index*20,withTiming('lightgreen',{
      duration:500
    }) )
  }
    else{
    squareHeight.value= withDelay(index*60,withTiming(10,{
      duration:500
    })
    )
    blockColor.value= withDelay(index*60,withTiming('lightgreen',{
      duration:500
    }))
  }

  squareHeight.value= withDelay(8000, withSpring(1))
}
  
  
  },[timedAnimate])

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotate.value}rad` },
        { translateY: translateY.value },
      ],
      width:squareWidth.value,
      height:squareHeight.value,  
      backgroundColor: blockColor.value,
    };
  });

  return (
    <Animated.View
      style={[
        {
           
          //   opacity: (index + 1) / N,
          position: 'absolute',
        },
        rStyle,
      ]}
    />
  );
};

export default Square;