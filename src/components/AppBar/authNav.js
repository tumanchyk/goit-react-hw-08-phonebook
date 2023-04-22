import { Nav, NavItem } from "./AppBar.styled"

export const AuthNav = () =>{
    return <Nav>
        <NavItem to="/register" >Register</NavItem>
        <NavItem to="/login">Log in</NavItem> 
    </Nav>
}