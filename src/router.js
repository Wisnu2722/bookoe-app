import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import LatestPage from "./pages/LatestPage";
import TopPicksPage from "./pages/TopPicksPage";
import SingleBook from "./pages/SingleBook";
import Search from "./pages/Search";
import NotFound404 from "./pages/NotFound404";

const router = createBrowserRouter([
    {
        path: "",
        Component: App,
        children: [
            { path: "/", Component: Home },
            { path: "latest", Component: LatestPage },
            { path: "top-picks", Component: TopPicksPage },
            { path: "book/:id", Component: SingleBook },
            { path: "search", Component: Search },
        ],
    },
    { path: "404", Component: NotFound404 },
    { path: "*", Component: NotFound404 },
]);

export default router;