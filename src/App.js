// Basic tools
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Button for navigation
function NavigationButton(props) {

  //parameters for setting the route
  const url = props.url;  //define the url of routing destination
  const title = props.title;  //define the title of the button
  const data = props.data;  //the data passing to the destination page

  //please follow the below code strictly
  const navigate = useNavigate();

  const route = () => {
    navigate(url, { state: { id: 1, data: data } });
  }

  return (
    <div>
      <button onClick={() => { route() }}>{title}</button>
    </div>
  );
}

// Home Page of the app
export default class App extends React.Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h2>Home Page</h2>

          <p>Functions implemented:</p>
          <NavigationButton url="./addNewUser" title="Add New User" />
          <NavigationButton url="./getUsers" title="Get User" />
          <NavigationButton url="./searchUser" title="Search User" />
          <NavigationButton url="./editUser" title="Edit User" />
          <NavigationButton url="./deleteUser" title="Delete User" />

        </header>
      </div>
    );
  }
}