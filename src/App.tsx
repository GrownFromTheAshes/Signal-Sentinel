// Manages the startup logic.
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ran } from './redux/reducers/startupReducer';
import { RootState } from './redux/reduxSetup';
import LoadingStartupPage from './containers/startup/LoadingStartupPage';
import React from 'react';

// FIXME: Add a check for "App" being remounted after startup has finished (so, not just from strict mode),
// and go to to home page instead of the loading startup page.  
// TODO: Add a cleanup function for App when it's dismounted during useEffect().
// This should clear the loaded in settings from memory to avoid them being an issue.
const App: React.FC = React.memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hasStarted = useSelector((state: RootState) => state.hasEntryRun.hasStarted);
  useEffect(() => {
    const beginStartup = async () => {
      if (hasStarted) { return; }
      // Get Translations Here
      // Get Settings Here
      // Wait for Homepage to Load Here
      await simulateLoadingDelay();
      // When everything is ready, go to the "/home" route.
      navigate("/home");
      dispatch(ran()); // Prevents App from running startup more than once.
    }
    // Run The BeginStartup Function Defined Above
    beginStartup();
  }, [hasStarted]);
  
  // Render the loading screen and update it until finished.
  return <LoadingStartupPage />;
});

// Simulates a loading delay for testing purposes.
async function simulateLoadingDelay(): Promise<void>  {
  await new Promise(resolve => setTimeout(resolve, 2000));
}

export default App;