import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import ThemeToggle from "./Darkmode";
import { toast } from "react-toastify";
import { div } from "motion/react-client";
// import { div } from "motion/react-client";
export default function Navber() {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        toast.success("Sign out Succesfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="sticky top-0 z-50 shadow-sm bg-gray-50 dark:bg-[#343a40]">
      <div className="maxWidth navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="dark:text-white btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 mt-3 ml-0 shadow dropdown-content bg-base-100 z-1 w-52"
            >
              {!user ? (
                <div className="flex flex-col items-center justify-center gap-2">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/allservice">All Service</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-1">
                  <img className="rounded-full w-14 h-14" src={user?.photoURL} alt="" />
                  <p className="text-lg font-semibold">{user?.displayName}</p>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/allservice">All Service</NavLink>
                  </li>
                  <li>
                    <NavLink to="/addservice">AddService</NavLink>
                  </li>
                  <li>
                    <NavLink to="/myservice">My Service</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                </div>
              )}

              <div className="flex flex-col gap-2 md:hidden ">
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="py-2 my-2 text-center text-white bg-black rounded-sm"
                  >
                    Log Out
                  </button>
                ) : (
                  <>
                    <div className="py-2 my-2 text-center text-white bg-black rounded-sm">
                      <NavLink to="/login" className="">
                        Login
                      </NavLink>
                    </div>
                  </>
                )}
              </div>
            </ul>
          </div>

          <div>
            <img
              className="w-14 h-14"
              src="https://i.postimg.cc/7hLmDFGh/product-review-high-resolution-logo-removebg-preview.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="hidden navbar-center lg:flex lg:gap-3">
          <ul className="menu-horizontal">
            {!user ? (
              <div className="flex items-center gap-3">
                <li className="px-3 font-semibold dark:text-white">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-500 border-yellow-500 border-b-2"
                        : ""
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="font-semibold dark:text-white ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-500 border-yellow-500 border-b-2"
                        : ""
                    }
                    to="/allservice"
                  >
                    All Service
                  </NavLink>
                </li>
                <li className="font-semibold dark:text-white ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-500 border-yellow-500 border-b-2"
                        : ""
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
              </div>
            ) : (
              <div className="flex items-center ">
                <li className="px-3 font-semibold dark:text-white">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-500 border-yellow-500 border-b-2"
                        : ""
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="font-semibold dark:text-white ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-500 border-yellow-500 border-b-2"
                        : ""
                    }
                    to="/allservice"
                  >
                    All Service
                  </NavLink>
                </li>
                <li className="pl-4 font-semibold dark:text-white ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-500 border-yellow-500 border-b-2"
                        : ""
                    }
                    to="/myservice"
                  >
                    My Service
                  </NavLink>
                </li>
                <li className="px-4 font-semibold dark:text-white ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-500 border-yellow-500 border-b-2"
                        : ""
                    }
                    to="/addservice"
                  >
                    Add Service
                  </NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden md:flex">
            {user ? (
              <div className="flex items-center gap-4">
                <p className="text-xl font-bold text-yellow-500">
                  {user?.displayName}
                </p>
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <button onClick={handleSignOut} className="btn">
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-yellow-400 ml-2 rounded-md" : ""
                  }
                  to="/login"
                >
                  <button className="px-4 py-2 ml-2 border border-yellow-400 rounded-md dark:text-white">
                    Login
                  </button>
                </NavLink>
              </>
            )}
          </div>
          <div className="mx-2">
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </div>
    </div>
  );
}
