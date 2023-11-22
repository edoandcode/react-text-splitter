import { memo } from 'react'
import {a} from '@react-spring/web'
import styled from 'styled-components'

const Mask = styled.span`
    display: block;
    overflow: ${({$maskLine}) => $maskLine ? 'hidden' : 'visible'};
`

const AnimatedLine = styled(a.span)`
  display: block;
`

function Line({ children, style, maskLines }) {
  return (
    <Mask
      className="line"
      $maskLine={maskLines}
    >
      <AnimatedLine style={style} >
        {children}
      </AnimatedLine>
    </Mask>
  )
}

export default memo(Line)
