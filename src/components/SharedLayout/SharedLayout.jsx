import { Suspense } from "react"
import { Link } from "./link.styled"
import { Loader } from "components/Loader/Loader"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { authenticatedSelector } from "redux/selectors/selectors"
import { UserMenu } from "components/UserMenu/UserMenu"
import css from './SharedLayot.module.css'

export const SharedLayout = () => {
    const authenticated = useSelector(authenticatedSelector);
    
    return (
        <div>
            <header className={css.header}>
            <nav className={css.nav}>
                <Link to='/' >Home</Link>
                {authenticated ? 
                <div className={css.containerTwo}>
                <Link to='/contacts' className={css.contacts} >Contacts</Link>
                <UserMenu />
                </div>
                 : 
                <div> 
                <Link to='/login' className={css.link}>Log in</Link>
                <Link to='/signup' >Sign up</Link>
                </div>}
            </nav>
            </header>

            <Suspense fallback={
              <div className={css.container}>
                <Loader/>
              </div>
            }>
                <Outlet />
            </Suspense>
        </div>
    )
}