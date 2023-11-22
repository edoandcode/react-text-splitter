import {useState, useCallback, useEffect} from 'react'
import { useTrail } from '@react-spring/web';
import AnimatedTextSplitter from "./AnimatedTextSplitter";

const RevealText = (props) => {
    const {children, inview, from, to, animateLines, animateWords, maskLines, config} = props
    const [items, setItems] = useState([])
    const onRefChange = useCallback((node) => {
        let nodes
        if (animateLines) nodes = node?.querySelectorAll('p.line')
        else if(animateWords) nodes = node?.querySelectorAll('span.word') 
        else nodes =  node?.querySelectorAll('span.char')
        setItems(nodes)      
    }, [animateLines, animateWords])

    useEffect(()=>{
        console.log('items', items)
    }, [items])


    const trail = useTrail(items.length, {
        from: from(inview),
        to: to(inview),
        config
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
    inview: true,
    animateWords: false,
    animateLines: false,
    maskLines: true,
    from: (inview) => ({
      y: inview ? 100 : 0,
    }),
    to: (inview) => ({
      opacity: inview ? 1 : 0,
      y: inview ? 0 : 100,
    }),
    config: {
      mass: 0.2,
      tension: 49,
      friction: 19,
    },

  }

export default RevealText