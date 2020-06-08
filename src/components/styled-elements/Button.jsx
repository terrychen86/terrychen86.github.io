// @flow strict

import styled from 'styled-components';

import * as colors from 'utils/colors';
import { rgba } from 'utils/rgba';

const Button: React$ComponentType<{}> = styled.button`
  padding: 20px 40px;
  border: none;
  outline: none;
  color: ${colors.white};
  background: ${colors.liteBlue};
  text-transform: uppercase;
  box-shadow: 0 8px 15px ${rgba(colors.black, 0.2)};
  transition: all 0.25s linear;

  :active {
    border: none;
    transform: translateY(5px);
    box-shadow: 0 2px 8px ${rgba(colors.black, 0.2)};
  }

  :hover {
    cursor: pointer;
  }
`;

export default Button;
