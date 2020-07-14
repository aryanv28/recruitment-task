import React, { useState } from "react";
import UserDetails from "./UserDetails";

function App() {
  const [userList, setUserList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div className="App">
      {userList.map(i => {
        return <UserDetails key={i} userID={i} />;
      })}
    </div>
  );
}

export default App;
