
import React from "react";
import "./styles.css";
import BlogSection from "./BlogSection";
import Login from "./Login";
export default function App()  {
  const [user, setUser] = React.useState("");
  const handleLogin = (userName) => {
    setUser(userName);
  };
  const handleLogout = () => {
    setUser("");
  };

  React.useEffect((userName, user)=> {
    if( setUser(user) !== userName) {
      console.log(`User has changed`);
    }  
  },[user]);

  //React.useEffect((userName, user)=> {
    //if( user !== "") {
      //console.log(`User has changed`);
    //}  return
  //},[user]);
    return (
      <div className="App">
        {user ? (
          <BlogSection user={user} onLogout={handleLogout} />
        ) : (
          <>
            <Login onSubmit={handleLogin} />
          </>
        )}
      </div>
    );
  }
