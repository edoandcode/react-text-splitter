import { memo } from 'react'
import {a} from '@react-spring/web'

function Word({ children, style }) {
  return (
    <a.span
      className="word"
      style={{
        display: (children === ' ' ? 'inline' : 'inline-block'),
      }}
    >
      {children}
    </a.span>
  )
}
export default memo(Word)
