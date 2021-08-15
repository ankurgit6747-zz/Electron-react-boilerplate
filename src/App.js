
import React from "react";
import { Link } from "react-router-dom";
 
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="/profile">Go back to profile</Link>
        <h3>App image</h3>
        <div>
          <img src="https://images.unsplash.com/photo-1569017388730-020b5f80a004?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3BlbiUyMHNvdXJjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='app image' />
        </div>
      </div>
    );
  }
}