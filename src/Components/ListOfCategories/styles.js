import styled, { css } from 'styled-components'
import { fadeIn } from '../../Styles/Animations'

export const List = styled.ul`
  display: flex;
  overflow: hidden;
  width: 100%;
  ${props => props.fixed && css`
    ${fadeIn({ time: '1s' })}
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    left: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  `}
  ${props => props.loading && css`
    .loading {
      display: inline-block;
      position: relative;
      width: 64px;
      height: 64px;
      transform: rotate(45deg);
      transform-origin: 32px 32px;
    }
    .loading div {
      top: 23px;
      left: 19px;
      position: absolute;
      width: 26px;
      height: 26px;
      background: #fff;
      animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    .loading div:after,
    .loading div:before {
      content: " ";
      position: absolute;
      display: block;
      width: 26px;
      height: 26px;
      background: #fff;
    }
    .loading div:before {
      left: -17px;
      border-radius: 50% 0 0 50%;
    }
    .loading div:after {
      top: -17px;
      border-radius: 50% 50% 0 0;
    }
    @keyframes lds-heart {
      0% {
        transform: scale(0.95);
      }
      5% {
        transform: scale(1.1);
      }
      39% {
        transform: scale(0.85);
      }
      45% {
        transform: scale(1);
      }
      60% {
        transform: scale(0.95);
      }
      100% {
        transform: scale(0.9);
      }
    }
  `}
`

export const Item = styled.li`
  padding: 10px 8px;
`
