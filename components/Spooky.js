import React from 'react'
import { style } from 'next/css'

const styles = {
  fontFamily: "'Creepster', cursive",
  color: 'rgb(255, 230, 255)',
  '-webkit-text-stroke': '1px black',
  textShadow: `
      3px 3px 0 #000,
    -1px -1px 0 #000,  
     1px -1px 0 #000,
     -1px 1px 0 #000,
      1px 1px 0 #000`
}

const Spooky = ({children, className}) =>
  <span className={style(styles)}>
    {children}
  </span>

export default Spooky
