import React from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";

const SideBar = ({color1 ,color2, color3}) => {
  return (
    <>


      <div className="drawer" >
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          
          <ul className="menu1 menu p-5 pt-40 w-80  h-full bg-base-200 text-base-content">
              <li className="pb-5">
                <Link to='/dashboard' className="sideBarItem1  content-center h-16 text-white  font-semibold" style={{backgroundColor:color1}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  DashBoard
                </Link>
              </li>
              <li className="pb-5">
                <Link to='/calendar' className="sideBarItem2 content-center h-16 text-white  font-semibold" style={{backgroundColor:color2}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  Calendar
                </Link>
              </li>
              <li className="pb-5">
                <Link to='/appointment' className="sideBarItem3  content-center h-16 text-white  font-semibold" style={{backgroundColor:color3}}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      
                    />
                  </svg>
                  Add Appointment
                </Link>
              </li>

            </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
