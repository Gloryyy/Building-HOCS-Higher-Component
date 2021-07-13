import React from "react";
import UserProfile from "./components/user-profile/user-profile.component";
import "./App.scss";
import UserList from "./components/user-list/user-list.component";

function App() {
  return (
    <div className="App">
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile
        dataSource="https://jsonplaceholder.typicode.com/posts"
        name="User"
        email="user@gmail.com"
      />
    </div>
  );
}

export default App;
