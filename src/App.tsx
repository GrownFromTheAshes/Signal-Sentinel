import React from 'react';

// App is the entrypoint for the program once it finishes up in the Electron processes.
// It's responsible for coordinating the lifecycle of the program.
// This means it handles calling other classes for startup and shutdown.
// It will also (as needed) coordinate global state issues that don't belong in another component.

//TODO: Working on cleaning this up.
const App: React.FC = React.memo(() => {
  
  return null;
});

// Simulates a loading delay for testing purposes.
async function simulateLoadingDelay(seconds:number): Promise<void>  {
  // Convert from seconds to milliseconds.  
  const totalTime:number = seconds * 1000;
  await new Promise(resolve => setTimeout(resolve, totalTime));
}

export default App;

/*
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
*/