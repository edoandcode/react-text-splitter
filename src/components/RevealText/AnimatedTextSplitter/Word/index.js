import { memo } from 'react'
import {a} from '@react-spring/web'
import styled from 'styled-components'

const AnimatedWord = styled(a.i)`
  display: inline;
`

function Word({ children, style }) {
  return (
    <AnimatedWord
      className="word"
      style={style}
    >
      {children}
    </AnimatedWord>
  )
}
export default memo(Word)
