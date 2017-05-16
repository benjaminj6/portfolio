// @flow
import React from 'react'

import {Section, COLORS} from 'src/theme'

const SubTitle = props => (
  <Section
    className='SubTitle'
    background={COLORS.white}
    color={COLORS.black}
    padding='2rem 1rem'
    {...props}
  >
    <h2>i create elegant, simple uis using modern web technologies</h2>
  </Section>
)

export default SubTitle
