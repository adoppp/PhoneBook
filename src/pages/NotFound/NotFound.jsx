import { Link } from './NotFound.styled';
import css from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={css.paddingContainer}>
            <div className={css.container}>
                <h1 className={css.title}>Error 404. Sorry, page was't found.</h1>
                <Link to="/" className={css.link} >Back to the home page.</Link>
            </div>
        </div>
    )
}

export default NotFound;