import React from 'react'
import { style } from 'next/css'

const Slide = ({children, className, id, noshrink}) => {
  const styles = {
    width: noshrink ? '100%' : undefined
  }

  return <div id={id} className={`flex min-vh-100 vw-100 items-center justify-center ${className}`}>
    <div className={style(styles)} >
      {children}
    </div>
  </div>
}

export default Slide
