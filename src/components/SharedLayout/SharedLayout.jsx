import { Suspense } from "react"
import { Link } from "./link.styled"
import { Loader } from "components/Loader/Loader"
import { Outlet } from "react-router-dom"

export const SharedLayout = () => {
    return (
        <div>
            <nav>
                <Link to='/' >Home</Link>
                <Link to='/contacts' >Contacts</Link>
                <Link to='/login' >Log in</Link>
                <Link to='/signup' >Sigh up</Link>
            </nav>

            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </div>
    )
}