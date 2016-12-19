import React from 'react'
import { style } from 'next/css'

const FullscreenBackground = ({src}) => {
  const styles = {
    zIndex: -1,
    background: `url(${src})`
  }
  return <div className={`vh-100 w-100 fixed absolute--fill ${style(styles)}`} />
}

export default FullscreenBackground
