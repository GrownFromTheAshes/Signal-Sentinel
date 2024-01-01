import React from 'react';

// This page purely exists to act as the root, and throw an error when any other route fails to throw an error on its own.
// It should only show up in testing if there's no error screen for a given route, and it should never show up in
// production builds.

const ErrorRootPage = () => {
    return (
        <div>
            <p>ERROR: No error page was specified in the lower pages, so this was thrown instead!</p>
            <p>You can remedy this by adding an error page to the route you were on when this got thrown.</p>
            <p>This page should NEVER appear in production builds.</p> 
        </div>
    )
}

export default ErrorRootPage;