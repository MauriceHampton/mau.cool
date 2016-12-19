import React from 'react'
import { style } from 'next/css'

import Page from '../components/Page'

import Title from '../components/Title'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
import FullscreenBackground from '../components/FullscreenBackground'

const styles = {
  about: {
    backgroundColor: 'rgba(255, 163, 215, 0.5)'
  },
  work: {
    // backgroundColor: 'rgba(255, 163, 215, 0.5)'
    // backgroundColor: 'black'
  }
}

export default () => {
  return <Page>
    <Title />
    <About className={style(styles.about)} />
    <Work className={style(styles.work)} />
    <Contact />

    <FullscreenBackground src='http://i.imgur.com/V1YKsZn.jpg' />
  </Page>
}
