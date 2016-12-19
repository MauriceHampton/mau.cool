/**
 * @name Text
 *
 * Puts text in a box!
 *  - With some padding (pa3)
 *  - And some margin (ma3)
 *  - And a background color (bg-black)
 *  - Aligned to the left (tl)
 *
 * Also:
 *  - makes the lines readably-long! (measure)
 *  - makes the lines readably-tall! (lh-copy)
 *  - makes the text a normal size! (f3)
 */

import React from 'react'

const Text = ({children}) =>
  <div className='tl lh-copy measure f3 pa3 ma3 bg-black'>
    {children}
  </div>

export default Text
