import React from 'react'
import Spooky from './Spooky'

const pages = [
  ['/', 'Home'],
  ['/#About', 'About'],
  ['/#Work', 'Work'],
  ['/#Contact', 'Contact']
]

const Nav = () =>
  <nav>
    <ol className='list pa0 ma0'>
      {
        pages.map(([url, title]) => (
          <li className='pv3' key={title}>
            <Spooky>
              <a href={url} className='link f1'>
                {title}
              </a>
            </Spooky>
          </li>
        ))
      }
    </ol>
  </nav>

export default Nav

