import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './styles/index';
import routes from "./navigation/RouteConfig";
import store from './redux/reduxSetup';

// Creates the Renderer for each new process. Any code run in here will run for each new process created by the main process manager for Signal Sentinel.

// Set up the router. This also mounts "App.tsx" when activated since the component is attached to the root route.
//TODO: Look into moving this into a separate "routerCreation" file and passing it in to each new renderer. That way, the renderer context isn't creating a new Router for each new process. Previous attempt at this ran into technical issues.
const programRouter = createHashRouter(routes, {
    // Basename is blank since we're using HashRouter.
    basename: "",
    // Sets applicable future flags that Signal Sentry is compatible with, to make upgrading later easier. 
    future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_relativeSplatPath: true
    }}
);

createRoot(document.getElementById("root")).render(
<StrictMode>
    <Provider store={store}>
        <RouterProvider
            router= {programRouter}
            future= {{v7_startTransition: true}}
        />
    </Provider>
</StrictMode>
);