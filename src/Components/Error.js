import { useRouteError } from "react-router-dom";
import { ERR_URL } from "../utils/constants";
const Error = () => {
    let err = useRouteError();
   return (
        <div className="error-container">
            <img src={ERR_URL} alt="Error" className="error-image" />
            <div className="error-content">
                <h1>Oops...</h1>
                <h2>Something Went Wrong</h2>
                <p>We're sorry, but it seems like there was an error.</p>
                <p>Please try again later or contact support.</p>
                <div className="error-details">
                    <p>Status: {err.status}</p>
                    <p>Status Code: {err.statusText}</p>
                </div>
            </div>
        </div>
    );
}

export default Error;
