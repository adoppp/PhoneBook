import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 4px 12px;
  border-radius: 5px;
  background: #3A3535;

  color: #F1F6F9;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;

  &.active {
    background: #FF9EAA;
  }
`;