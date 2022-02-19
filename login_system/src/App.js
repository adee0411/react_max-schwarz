import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedInStoredData = localStorage.getItem("isLoggedIn");
    console.log(isLoggedInStoredData);

    if (isLoggedInStoredData) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const loginHandler = (email, pwd) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn((prevState) => {
      if (prevState) {
        localStorage.removeItem("isLoggedIn");
      }
      return !prevState;
    });
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={loginHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={loginHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
