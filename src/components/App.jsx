import React from "react";
import Login from "./Login";

var isLoggedIn = true;

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        // currentTime > 12 ? <h1>Go rest</h1> : null
        currentTime > 12 && <h1>Go Rest</h1>
      }
    </div>
  );
}

export default App;
