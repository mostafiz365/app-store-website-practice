import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Apps from "../pages/apps/Apps";
import Installation from "../pages/installation/Installation";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AppDetails from "../pages/appDetails/AppDetails";
import Chart from "../pages/chart/Chart";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('/data.json'),
                Component: Home},
            {
                path: 'apps',
                loader: () => fetch('/data.json'),
                Component: Apps},
            {
                path: 'apps/:id',
                loader: () => fetch('/data.json'),
                Component: AppDetails
            },
            {
                path: 'chart',
                loader: () => fetch('/data.json'),
                Component: Chart},
            {path: 'installation', Component: Installation}
        ]
    },
    {path: '*', Component: ErrorPage}
])