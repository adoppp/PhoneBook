import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Linkk = styled(NavLink)`
  border-radius: 0px 100px;
  background: #618264;
  color: #FFF;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  padding: 12px 20px;

  transition-property: background-color;
  transition-duration: 250ms; 
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #395C38;
  }

  &.active {
    background: #79AC78;

    &:hover {
      background: #395C38;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const LinkP = styled(NavLink)`
  color: #F4F4F4;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 700;
  line-height: normal;

  transition-property: color;
  transition-duration: 250ms; 
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #DBDBDB;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;