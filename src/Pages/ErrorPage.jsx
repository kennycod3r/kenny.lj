import React from "react";
import { useRouteError } from "react-router-dom";
//import ER from "./assets/errorrobot.svg";
//import "./index.css";
import { Link } from "react-router-dom";
//import CloseButton from "./utility/CloseButton";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="fCj">
      <div>
        <div className="erobot">
          
        </div>
        <h1>Oops!</h1>
        <p className="sP">Sorry, an unexpected error has occurred.</p>
        <p className="sP">
          <b>{error.statusText || error.message}</b>
        </p>
      </div>
      
      <div className="article">
      
      </div>
    </div>
  );
}
