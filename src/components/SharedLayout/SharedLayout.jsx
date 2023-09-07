import { Suspense } from "react"
import { Link } from "./link.styled"
import { Loader } from "components/Loader/Loader"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { authenticatedSelector } from "redux/selectors/selectors"
import { UserMenu } from "components/UserMenu/UserMenu"

export const SharedLayout = () => {
    const authenticated = useSelector(authenticatedSelector);
    
    return (
        <div>
            <nav>
                <Link to='/' >Home</Link>
                {authenticated ? 
                <div>
                <Link to='/contacts' >Contacts</Link>
                <UserMenu />
                </div>
                 : 
                <div> 
                <Link to='/login' >Log in</Link>
                <Link to='/signup' >Sign up</Link>
                </div>}
            </nav>

            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </div>
    )
}