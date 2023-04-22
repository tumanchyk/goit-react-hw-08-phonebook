import { Container} from './Layout.styled'
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/appBar';

export const Layout = () =>{
return <>
<Container>
    <AppBar />
    <Suspense>
        <Outlet />
    </Suspense>
</Container>
</>


}