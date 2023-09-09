import { useDispatch, useSelector } from "react-redux"
import { logoutThunk } from "redux/operations/authThunk";
import { userDataSelector, userEmailSelector } from "redux/selectors/selectors"
import css from './UserMenu.module.css';

export const UserMenu = () => {
    const email = useSelector(userEmailSelector);
    const user = useSelector(userDataSelector)
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logoutThunk())
    }

    return (
        <div className={css.container}>
            <p className={css.p}>Hello, {user.name} ({email})</p>
            <button onClick={handleLogOut} className={css.button}>Log out</button>
            <p className={css.pTwo}>Hello, {user.name} ({email})</p>
        </div>
    )
}