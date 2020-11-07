import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";

const routes = [
    { path: "/login", component: Login },
    { path: "/profile", component: Profile },
    { path: "/", component: Home, exact: true }
];

export default routes;
