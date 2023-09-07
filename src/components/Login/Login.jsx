import { useDispatch } from "react-redux";
import Notiflix from "notiflix";
import { loginThunk } from "redux/operations/authThunk";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSumbit = e => {
        e.preventDefault()

        const email = e.currentTarget.elements.userEmail.value;
        const password = e.currentTarget.elements.userPassword.value;

        const formData = {
            email,
            password,
        }

        if (formData.email === '') {
            Notiflix.Notify.warning("Enter a email!")
            return;
        } else if (formData.password === '') {
            Notiflix.Notify.warning("Enter a password!")
            return;
        } 

        dispatch(loginThunk(formData))
        e.target.reset(); 
    }

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <label>
                    Email:
                    <input type="email" name="userEmail"/>
                </label>
                <label>
                    Password:
                    <input type="password" name="userPassword"/>
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}