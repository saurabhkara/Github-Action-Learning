import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}
