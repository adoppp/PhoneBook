import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Error 404. Sorry, page wan't found.</h1>
            <Link to="/" >Back to the home page.</Link>
        </div>
    )
}

export default NotFound;