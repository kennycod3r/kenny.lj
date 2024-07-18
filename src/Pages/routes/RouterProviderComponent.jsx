import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App.jsx";
import ErrorPage from "../ErrorPage.jsx";
import AboutPage from "../AboutPage.jsx";
import HomePage from "../HomePage.jsx";
import Projects from "../../Pages/Projects.jsx";
import ContactPage from "../../Pages/ContactPage.jsx";
import TechSkillsPage from "../TechSkillsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "AboutPage", element: <AboutPage /> },
      { path: "Projects", element: <Projects /> },
      { path: "ContactPage", element: <ContactPage /> },
      { path: "TechSkills", element: <TechSkillsPage /> }, // Add your new route here
    ],
  },
]);

function RouterProviderComponent() {
  return <RouterProvider router={router} />;
}

export default RouterProviderComponent;
