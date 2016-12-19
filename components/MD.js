import React from 'react'
import ReactMarkdown from 'react-markdown'

const MD = string => <ReactMarkdown className='lh-copy measure' source={string} />

export default MD

