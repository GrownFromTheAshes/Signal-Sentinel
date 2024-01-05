import React, { useState } from 'react';
import { getStartupState } from 'src/lifecycle/startup/startupManager';

const LoadingStartupPage = () => {
    const [startupState, setStartupState] = useState(getStartupState());
    return (
        <div>
            <p>Loading The Program, Hang Tight!</p>
        </div>
    )
}

export default LoadingStartupPage;