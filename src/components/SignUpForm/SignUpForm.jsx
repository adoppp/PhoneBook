import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { regisrtrationThunk } from "redux/operations/authThunk";
import { errorUserSelector } from "redux/selectors/selectors";
import { Error } from "components/Error/Error";
import css from './SignUpForm.module.css';

export const SignUpForm = () => {
    const error = useSelector(errorUserSelector);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault()

        const name = e.currentTarget.elements.userName.value;
        const email = e.currentTarget.elements.userEmail.value;
        const password = e.currentTarget.elements.userPassword.value;

        const formData = {
            name,
            email,
            password,
        }

        if (formData.name === '') {
            Notiflix.Notify.warning("Enter a name!")
            return;
        } else if (formData.email === '') {
            Notiflix.Notify.warning("Enter a email!")
            return;
        } else if (formData.password === '') {
            Notiflix.Notify.warning("Enter a password!")
            return;
        } 

        dispatch(regisrtrationThunk(formData))
        e.target.reset(); 
    };

    return(
        <div className={css.container}>
            <form onSubmit={handleSubmit} className={css.form}>
                <h1 className={css.title}>Registration form</h1>
                <input type="text" name="userName" className={css.input} placeholder="Name"/>
                <input type="email" name="userEmail" className={css.input} placeholder="Email*"/>
                <input type="password" name="userPassword" className={css.input} placeholder="Password"/>
                <button type="submit" className={css.button}>Sign up</button>
            </form>
            {error && ( <Error errorText={error} /> )}
        </div>
    )
}