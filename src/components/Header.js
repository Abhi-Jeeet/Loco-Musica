import React from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [login, setLogin] = React.useState(false);
  const isOnline = useOnline();
  return (
    <>
    <div className=" flex justify-between bg-transparent shadow-md m-2 p-2 ">
      <div className="h-10 w-10 m-2 ">
        <a href="/">
          <img
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
            alt="logo"
          />
        </a>
      </div>
      <div >
        <ul className="flex flex-row space-x-5 p-3 m-2" >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="p-3 m-2 ">
        {login ? (
          <button className="login__button" onClick={() => setLogin(false)}>
            Logout
          </button>
        ) : (
          <button className="logout__button" onClick={() => setLogin(true)}>
            Login
          </button>
        )}
      </div>

      </div>
      {
        isOnline ? (
          <div className="border mx-80 bg-green-400 rounded-md h-2  ">
          </div>
        ) : (
            <div className="border mx-80 bg-red-400 rounded-md h-2 ">
          </div>
        )
      }
      
    </>
  );
};

export default Header;
