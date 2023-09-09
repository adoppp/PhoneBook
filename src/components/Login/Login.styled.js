import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    background: #232020;
    border-radius: 5px;
    text-decoration: none;

    max-width: 258px;
    display: block;
    width: 100%;
    padding: 16px 0;
    text-align: center;

    color: #F1F6F9;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
`;