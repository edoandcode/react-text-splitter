import { memo } from 'react'
import { a } from '@react-spring/web'
import styled from 'styled-components'

const AnimatedChar = styled(a.i)`
  display: inline;
  font-style: normal;
`

function Char({ children, style }) {
  const className = children === ' ' ? 'char white-space' : 'char'
  return (
    <AnimatedChar
      className={className}
      style={style}
    >
      {children}
    </AnimatedChar>
  )
}

export default memo(Char)
