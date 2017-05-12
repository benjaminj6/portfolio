// @flow
import React, {Component} from 'react'

import {Banner, Toggler, SubTitle} from 'src/components'

import type {NavItem} from '../components/Nav/Nav.types'

type HomeProps = {nav: Array<NavItem>}

class Home extends Component {
  props: HomeProps
  defaultProps: HomeProps

  render () {
    return (
      <main className='Home'>
        <Toggler id='toggle-nav' navItems={this.props.nav} />
        <Banner id='Banner' />
        <SubTitle id='SubTitle' />
        <section id='About'>About</section>
      </main>
    )
  }
}

Home.defaultProps = {
  nav: [
    {url: '/#Banner', text: 'home'},
    {url: '/#Work', text: 'work'},
    {url: '/#About', text: 'about'},
    {url: 'mailto:benjamin.d.johnson@icloud.com', text: 'contact'}
  ]
}

export default Home
