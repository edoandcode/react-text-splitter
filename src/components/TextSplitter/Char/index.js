import { memo } from 'react'

function Char({ children }) {
  const className = children === ' ' ? 'white-space' : 'char'
  return (
    <span
      className={className}
    >
      {children}
    </span>
  )
}

export default memo(Char)
