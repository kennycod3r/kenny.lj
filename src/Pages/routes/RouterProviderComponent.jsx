import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App.jsx";
import ErrorPage from "../ErrorPage.jsx";
import AboutPage from "../AboutPage.jsx";
import HomePage from "../HomePage.jsx";
import ContactPage from "../../Pages/ContactPage.jsx";
import TechSkillsPage from "../TechSkillsPage.jsx";
import CaseStudy from "../CaseStudy.jsx";
import CaseStudyDetail from "../../components/CaseStudyDetail/CaseStudyDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "AboutPage", element: <AboutPage /> },
      { path: "CaseStudy", element: <CaseStudy /> },
      { path: "case-study/:caseStudyId", element: <CaseStudyDetail /> },
      { path: "ContactPage", element: <ContactPage /> },
      { path: "TechSkills", element: <TechSkillsPage /> },
    ],
  },
]);

function RouterProviderComponent() {
  return <RouterProvider router={router} />;
}

export default RouterProviderComponent;
