import React from 'react'
import Slide from './Slide'
import MD from './MD'
import Heading from './Heading'
import Text from './Text'

const body = MD(`
I like to make art with tech and the web.

Maybe you have a cool project idea but you don't know how to get
started. Maybe you have some cool tricks you wanna show off. Maybe you
just wanna kick it.

Stop by at 2pm this Sunday!

We call it "Sunday School"

1936 W. Division St.
Floor 2: The Uprising Creative
`)

const About = ({className}) =>
  <Slide id='About' className={className} >
    <Heading>About</Heading>
    <Text>
      {body}
    </Text>
  </Slide>

export default About
