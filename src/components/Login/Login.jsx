import { useDispatch } from "react-redux";
import Notiflix from "notiflix";
import { loginThunk } from "redux/operations/authThunk";
import css from './Login.module.css';
import { Link } from "./Login.styled";

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
        <div className={css.container}>
            <div>
            <form onSubmit={handleSumbit} className={css.form}>
                    <h1 className={css.title}>Log in</h1>
                    <input type="email" name="userEmail" className={css.input} placeholder="Email*"/>
                    <input type="password" name="userPassword" className={css.input} placeholder="Password"/>
                <button type="submit" className={css.button}>Log in</button>
            </form>
            </div>
            <div>
                <h2 className={css.new}>new <span className={css.span}>users</span></h2>
                <Link to='/signup'>Register now</Link>
            </div>
        </div>
    )
}