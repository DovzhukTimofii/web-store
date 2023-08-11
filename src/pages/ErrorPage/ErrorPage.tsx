import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react"

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Link to={`/`} >
        <h1>Beck to home page</h1>
      </Link>
    </div>
  );
}

export default ErrorPage