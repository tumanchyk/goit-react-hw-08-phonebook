import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Title1 = styled.h2`
font-size: 30px;
font-weight: 700;
color: #fff;
`
 
const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px 40px;
`

const Nav = styled.nav`
display: flex;
align-items: baseline;`

const NavItem = styled(NavLink)`
text-decoration: none;
font-size: 18px;
color: #eee;
&:not(:last-child){
    padding-right: 20px;
}
&.active{
    font-weight: 600;
    font-size: 18px;
    color: #fff;
}
&:hover{
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);; 
}
`
const BtnLogout = styled.button`
font-size: 15px;
border: none;
border-radius: 50px;
padding: 6px 14px;
cursor: pointer;
margin-left: 10px;
color: #fff;
background-color: red;
opacity: 0.7;
&:hover{
    opacity: 1;
    color: #fff;
}
`
const MenuWrapper = styled.div`
display: flex;
align-items: center;

`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const UserMail = styled.span`
color: #fff;
margin-bottom: 10px;
font-size: 12px;`

export {Nav, NavItem, Header, BtnLogout, Wrapper, UserMail, MenuWrapper}