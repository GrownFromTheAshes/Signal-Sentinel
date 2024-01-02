/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import '.styles/index.scss';
import routes from "./navigation/RouteConfig";
import store from './redux/reduxSetup';

// Set up the router. This also mounts "App.tsx" when activated since the component is attached to the root route.
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