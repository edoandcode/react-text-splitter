import { memo } from 'react'

function Line({ children }) {
   return (
      <p
         className="line"
      >
         {children}
      </p>
   )
}

export default memo(Line)
