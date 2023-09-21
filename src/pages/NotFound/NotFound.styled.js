import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  border-radius: 0px 100px;
  background: #618264;
  color: #FFF;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  padding: 12px 40px;
  width: fit-content;
  margin: 0 auto;
  display: block;

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
    padding: 12px 20px;
    font-weight: 400;
  }
`;