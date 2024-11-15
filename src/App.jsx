import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";


import HomePage from "./pages/HomePage";
import MainLaouts from "./layouts/MainLaouts";
import AboutPage from "./pages/AboutPage";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLaouts/>}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

      </Route>
    )
  );

  return <RouterProvider router={route} />;
}

export default App;
