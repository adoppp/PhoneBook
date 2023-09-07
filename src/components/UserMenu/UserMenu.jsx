import { useDispatch, useSelector } from "react-redux"
import { logoutThunk } from "redux/operations/authThunk";
import { userEmailSelector } from "redux/selectors/selectors"

export const UserMenu = () => {
    const email = useSelector(userEmailSelector);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logoutThunk())
    }

    return (
        <div>
            <p>{email}</p>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    )
}