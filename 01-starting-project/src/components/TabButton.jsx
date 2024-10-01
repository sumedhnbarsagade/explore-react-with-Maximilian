import React from 'react'

function TabButton({children, onSelect, isSelected, ...props}) {

  return (
    <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect} {...props}>{children}</button>
    </li>
  )
}

export default TabButton