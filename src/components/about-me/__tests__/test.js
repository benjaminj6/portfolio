/* eslint-env jest */
import { h } from 'preact'
import { shallow } from 'preact-render-spy'
import AboutMe from '../'

test('About Me snapshot', () => {
  const tree = shallow(<AboutMe />)

  expect(tree).toMatchSnapshot()
})
