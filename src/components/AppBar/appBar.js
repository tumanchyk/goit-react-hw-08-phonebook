import { useSelector } from "react-redux"
import { UserMenu } from "./userMenu";
import { AuthNav } from "./authNav";
import { getIsLoggedIn } from "redux/auth/selectors";
import { Header, Title1 } from "./AppBar.styled";


export const AppBar = () =>{
    const isLoggedIn = useSelector(getIsLoggedIn)
    return (
        <Header>
          <Title1>Phonebook</Title1>
            {isLoggedIn ? <UserMenu/> : <AuthNav />}
        </Header>
    )
}