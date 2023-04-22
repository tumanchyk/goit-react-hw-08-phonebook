import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/operations";
import { getUserMail } from "redux/auth/selectors";
import { NavItem, BtnLogout, Wrapper, UserMail, MenuWrapper } from "./AppBar.styled";
export function UserMenu() {
    const dispatch = useDispatch();
    const mail = useSelector(getUserMail);
    return (
     <MenuWrapper>
        <NavItem to="/contacts">Contacts</NavItem>
        <Wrapper>
          <UserMail>{mail}</UserMail>
          <BtnLogout type="button" onClick={() => dispatch(logout())}>
            Logout
          </BtnLogout>
        </Wrapper>   
     </MenuWrapper>
    );
  }