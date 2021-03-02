import React from "react";
import { Link, Route } from "react-router-dom";

function Search (props) {
  return (
    <div>
      <h1>References and links</h1>
      <p>
        Application dependencies
      </p>
      <Link to="https://randomuser.me/" role="button" className="btn btn-link">
        API reference
      </Link>{" "}
      {/* <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} /> */}
    </div>
  );
}

export default Search;
