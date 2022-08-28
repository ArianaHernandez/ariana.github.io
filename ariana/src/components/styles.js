import styled from 'styled-components';

export const FullNavBar = styled.div`
  position: sticky; 
  top:0;
    display:flex;
    justify-content:space-between;
    width: 100%;
    background-color: #C589E8;
    padding-right:10%;
    font-size:24px;
`;

export const NavLeft = styled.div`
width:50%;
border: 0.5px black solid;
`;
export const NavRight = styled.div`
width:45%;
display:flex;
justify-content:space-around;
`;
export const NavLink = styled.a`
text-decoration:none;
color:#FBF9FF;
`;