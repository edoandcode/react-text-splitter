import { memo } from 'react'

function Word({ children }) {
   return (
      <span
         className="word"
         style={{
            display: (children === ' ' ? 'inline' : 'inline-block'),
         }}
      >
         {children}
      </span>
   )
}
export default memo(Word)
