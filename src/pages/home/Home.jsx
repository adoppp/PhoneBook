import { useSelector } from "react-redux";
import { authenticatedSelector } from "redux/selectors/selectors";
import css from './Home.module.css';

const Home = () => {
    const authenticated = useSelector(authenticatedSelector);
    return authenticated ? <h1 className={css.title}>Thanks for using this app!</h1> : <h1 className={css.title}>For using this app you need to register!</h1>
}

export default Home;