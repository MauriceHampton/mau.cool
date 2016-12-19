import React from 'react'
import Spooky from './Spooky'

const Heading = ({children, className}) =>
  <h1 className={`${className || 'f-subheadline'}`}>
    <Spooky>
      {children}
    </Spooky>
  </h1>

export default Heading
