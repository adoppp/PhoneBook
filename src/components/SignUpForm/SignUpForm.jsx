import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { regisrtrationThunk } from "redux/operations/authThunk";
import { errorUserSelector } from "redux/selectors/selectors";
import { Error } from "components/Error/Error";

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="userName"/>
                </label>
                <label>
                    Email:
                    <input type="email" name="userEmail"/>
                </label>
                <label>
                    Password:
                    <input type="password" name="userPassword"/>
                </label>
                <button type="submit">Sign up</button>
            </form>
            {error && ( <Error errorText={error} /> )}
        </div>
    )
}