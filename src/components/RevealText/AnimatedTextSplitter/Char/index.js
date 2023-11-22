import { memo } from 'react'
import {a} from '@react-spring/web'
import styled from 'styled-components'

const AnimatedChar = styled(a.span)`
  display: ${({$whiteSpace}) => $whiteSpace ? 'inline' : 'inline-block'} ;
`

function Char({ children, style }) {
  const className = children === ' ' ? 'white-space' : 'char'
  return (
    <AnimatedChar
      className={className}
      style={style}
      $whiteSpace={className === 'white-space'}
    >
      {children}
    </AnimatedChar>
  )
}

export default memo(Char)
