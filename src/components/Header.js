import { useState } from "react";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );
};

// const loggedInUser = () => {
//   return true;
// };
//React Component
const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Contact</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => {setisLoggedIn(false);}}>
          Logout
        </button>
      ) : (
        <button onClick={()=>{setisLoggedIn(true)}}>Login</button>
      )}
    </div>
  );
};
export default Header;
