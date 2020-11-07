import React from "react";
import { Link } from "react-router-dom";

import "./AdditionaLoginOptions.scss";

const AdditionalLoginOptions = () => {
    return (
        <div className="login-options-wrapper">
            <span>
                New to Rallee?{" "}
                <Link className="login-options-link" to="signup">
                    Sign-up
                </Link>
            </span>
            {/* <span>
                <Link>Forgot Password? </Link>
            </span> */}
        </div>
    );
};

export default AdditionalLoginOptions;
