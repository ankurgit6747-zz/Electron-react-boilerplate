
import React from "react";
import { Link } from "react-router-dom";
 
// export default class Profile extends React.Component {
//   render() {

const Profile = () => {
    return (
      <div>
        <h1>This is my profile</h1>
        <Link to="/">Go back to home</Link>
        <h3>Profile image</h3>
        <div>
          <img src="https://images.unsplash.com/photo-1507080295035-070b43b2a780?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9wZW4lMjBzb3VyY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img> 
        </div>
      </div>
    );
  }

  export default Profile
