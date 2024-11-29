import { RouterProvider, createBrowserRouter } from "react-router-dom";


// import { ThemeProvider } from "./components/theme-provider";



import "./App.css";
import LandingPage from "./pages/landingPage";
import OnBoarding from "./pages/onboarding";
import JobListing from "./pages/job-listing";
import PostJob from "./pages/post-job";
import MyJobs from "./pages/my-job";
import SavedJobs from "./pages/save-jobs";
import JobPage from "./pages/job";
import AppLayout from "./layout/app-layout";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./layout/protected-route";
import InvalidPage from "./pages/invalid-page";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <OnBoarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />
        ,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/saved-jobs",
        element: <SavedJobs />,
      },
      {
        path: "/job/:id",
        element:  <ProtectedRoute>
          <JobPage />
        </ProtectedRoute>,
      },
      {
        path: "/*",
        element:<InvalidPage/>
      }
    ],
  },
]);


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;