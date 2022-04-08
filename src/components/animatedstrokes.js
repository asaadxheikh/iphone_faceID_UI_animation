 
   
import React, { useRef, useState } from "react";
import Animated, { Easing, useAnimatedProps } from "react-native-reanimated";
import { Path } from "react-native-svg";
 
const AnimatedPath = Animated.createAnimatedComponent(Path);
const colors = ["#FFC27A", "#7EDAB9", "#45A6E5", "#FE8777"];

const AnimatedStroke = ({ d, progress } ) => {
  const stroke = colors[Math.round(Math.random() * (colors.length - 1))];
  const [length, setLength] = useState(0);
  const ref = useRef(null);
 
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset:
      length - length * (progress.value),
      
  }));
  return (
    <>
     
      <AnimatedPath
        animatedProps={animatedProps}
        onLayout={() => setLength(ref.current?.getTotalLength())}
        ref={ref}
        d={d}
        stroke='tomato'
        strokeWidth={8} 
        strokeDasharray={6}
        strokeLinejoin='round'
      />
    </>
  );
};

export default AnimatedStroke; 