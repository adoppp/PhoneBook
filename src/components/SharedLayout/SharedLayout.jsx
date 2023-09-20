import { Suspense } from "react"
import { Linkk, LinkP} from "./link.styled"
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
                <LinkP to='/' >PhoneBook</LinkP>
                {authenticated ? 
                <div className={css.containerTwo}>
                <Linkk to='/contacts' className={css.contacts} >Contacts</Linkk>
                <UserMenu />
                </div>
                 : 
                <div className={css.containerThree}> 
                <Linkk to='/signup' className={css.link}>Sign up</Linkk>
                <Linkk to='/login' >Log in</Linkk>
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