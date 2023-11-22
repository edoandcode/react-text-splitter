import { memo } from 'react'
import {a} from '@react-spring/web'
import styled from 'styled-components'

const AnimatedWord = styled(a.span)`
  display: ${({$whitespace}) => $whitespace ? 'inline' : 'inline-block'};
`

function Word({ children, style }) {
  return (
    <AnimatedWord
      className="word"
      $whitespace={children === ' '}
      style={style}
    >
      {children}
    </AnimatedWord>
  )
}
export default memo(Word)
