import React from "react";

import Header from "../Header";
import Footer from "../Footer";

function ContentPage(props) {
    return (
        <div
            style={{
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "space-between",
                minHeight: "100vh"
            }}
        >
            <Header />

            <div>{props.children}</div>

            <Footer />
        </div>
    );
}

export default ContentPage;
