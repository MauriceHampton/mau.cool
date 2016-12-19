import React from 'react'
import css, { style } from 'next/css'
import Nav from './Nav'
import Head from 'next/head'

css.global('html, body', {
  backgroundColor: 'rgb(255, 230, 255)',
  color: 'rgb(255, 230, 255)',
  fontFamily: "'Roboto', sans-serif"
})

css.global('a', {
  color: '#d4fffc',
  textDecoration: 'none'
})

const Page = ({title, children}) => {
  const styles = {
    nav: {
      backgroundColor: 'rgba(255, 163, 215, 0.5)'
    }
  }

  return <section>
    <Head>
      <link rel='stylesheet' href='https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css' />
      <link rel='stylesheet' href='https://npmcdn.com/tachyons-flexbox@2.0.0/css/tachyons-flexbox.min.css' />
      <link href='https://fonts.googleapis.com/css?family=Creepster|Roboto' rel='stylesheet' />
    </Head>

    <div className={`w-25-ns fl w-100 min-vh-100 tc fixed ${style(styles.nav)}`} >
      <Nav />
    </div>

    <div className='w-25-ns vh-100 fl' />

    <div className='w-75-ns fl w-100 tc'>
      {children}
    </div>

  </section>
}

export default Page
