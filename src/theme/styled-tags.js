import styled, {css} from 'styled-components'
import rgba from 'hex-rgba'

import {COLORS} from './constants'
import {animations, pseudo} from './mixins'

const {hover} = pseudo

export const A = styled.a`
  text-decoration: none
  color: ${rgba(COLORS.white, 90)}
  text-shadow: none

  ${animations.transitionShort('color', 'text-shadow')}

  ${hover`
    color: ${rgba(COLORS.white, 100)}
    text-shadow: 0 0 ${COLORS.white}
    cursor: pointer
  `}
`

export const Input = styled.input`
  ${props => props.invisible
    ? css`
      position: absolute
      left: -100000px

      /* Allows the hidden input's label to appear focused */
      ;&:focus + * label {
        outline: -webkit-focus-ring-color auto 5px;
      }
    `
    : ''
  }
`

export const Label = styled.label`
  ${props => props.icon ? `user-select: none` : ''}
`

export const Svg = styled.svg`
  fill: currentColor
  ${hover`
    cursor: pointer
  `}
`
