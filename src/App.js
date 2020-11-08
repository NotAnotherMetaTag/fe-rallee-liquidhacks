import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import routes from "./routes";

function App() {
    return (
        <>
            <Switch>
                {/* Redirect anything that is more than a single url param */}
                {routes.map((route, i) => {
                    return <Route key={i} {...route} />;
                })}
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}

export default App;
