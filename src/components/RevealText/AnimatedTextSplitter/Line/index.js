import { memo } from 'react'
import {a} from '@react-spring/web'
import styled from 'styled-components'

const PWrapper = styled.p`
    overflow: ${({$maskLine}) => $maskLine ? 'hidden' : 'visible'};
`

const AnimatedLine = styled(a.span)`
  display: block;
`

function Line({ children, style, maskLines }) {
  return (
    <PWrapper
      className="line"
      $maskLine={maskLines}
    >
      <AnimatedLine style={style} >
        {children}
      </AnimatedLine>
    </PWrapper>
  )
}

export default memo(Line)
