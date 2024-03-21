import { memo } from 'react'



function Char({ children }) {
   const className = children === ' ' ? 'white-space' : 'char'
   return (
      <i
          style={{fontStyle: 'normal', display: 'inline'}}
         className={className}
      >
         {children}
      </i>
   )
}

export default memo(Char)
