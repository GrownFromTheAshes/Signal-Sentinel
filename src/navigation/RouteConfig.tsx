import HomePage from '../views/home/HomePage'
import RootPage from '../views/error/RootPage';
import ErrorRootPage from '../views/error/ErrorRootPage'
import ErrorStartupPage from '../views/startup/ErrorStartupPage';
import React from 'react';
import { RouteObject } from 'react-router-dom';
import App from '../App';

// This file serves as a "configuration file" for all of the Routes in the program.
// See the README.md file for more information.
//TODO: Add a 404 ERROR page. I think that goes in the Root Error Page? Need to check the docs to be sure.
const routes: RouteObject[] = [
    // Default Error Message Page. Shows error messages if you end up here, since there's no routes to this page.
    {
        element: <RootPage />,
        errorElement: <ErrorRootPage />
    },
    // Startup Loading Screen. Specified as the root path so it's the default screen.
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorStartupPage />
    },
    // Home Page
    {
        path: "/home",
        element: <HomePage />
    }
]

export default routes;