import { useState, useCallback } from 'react'
import { useTrail } from '@react-spring/web';
import AnimatedTextSplitter from "./AnimatedTextSplitter";

const RevealText = (props) => {
   const {
      children,
      inView,
      from,
      to,
      animateLines,
      animateWords,
      maskLines,
      config,
      delay
   } = props
   const [items, setItems] = useState([])
   const onRefChange = useCallback((node) => {
      let nodes
      if (animateLines) nodes = node?.querySelectorAll('.line')
      else if (animateWords) nodes = node?.querySelectorAll('.word')
      else nodes = node?.querySelectorAll('.char')
      setItems(nodes)
   }, [animateLines, animateWords])


   const trail = useTrail(items.length, {
      from: from(inView),
      to: to(inView),
      config,
      delay
   })

   return (
      <AnimatedTextSplitter
         ref={onRefChange}
         animatedTrail={trail}
         animateWords={animateWords}
         animateLines={animateLines}
         maskLines={maskLines}
      >
         {children}
      </AnimatedTextSplitter>
   )
}

RevealText.defaultProps = {
   inView: true,
   animateWords: false,
   animateLines: false,
   maskLines: true,
   from: (inView) => ({
      y: inView ? 100 : 0,
   }),
   to: (inView) => ({
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 100,
   }),
   config: {
      mass: 0.2,
      tension: 49,
      friction: 19,
   },
   delay: 0
}

export default RevealText