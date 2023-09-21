import { useSelector } from "react-redux";
import { authenticatedSelector } from "redux/selectors/selectors";
import css from './Home.module.css';

const Home = () => {
    const authenticated = useSelector(authenticatedSelector);
    return authenticated ? (
    <div className={css.paddingContainer}>
        <div className={css.container}>
            <h1 className={css.title}>Thanks for using this app!</h1>
            <p className={css.text}>Application PhoneBook created by Daniil Cheban.</p>
        </div>
    </div>
    ) : (
    <div className={css.paddingContainer}>
        <div className={css.container}>
            <h1 className={css.title}>For using this app you need to register!</h1>
            <p className={css.text}>Application PhoneBook created by Daniil Cheban.</p>
        </div>
    </div>
    )
}

export default Home;