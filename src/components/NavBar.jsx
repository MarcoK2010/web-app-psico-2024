import React from "react";
import "./navBar.css";
import logo from "../../assets/logo.png";
const NavBar = () => {
  return (
    <>
      <nav className="drop-shadow-2xl sticky top-0 z-10 bg-white backdrop-filter bg-opacity-100 rounded-lg">
        <div className=" mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div class="grid grid-cols-2 items-center w-40">
              <div className="mt-4 w-16">
                <img src={logo} alt="" />
              </div>

              <div className="text-xs font-black w-64  items-center mt-2 ml-2">
                Daniel Padnos Wellness
                <div>Center WebApp</div>
              </div>
            </div>

            <div className="flex text-gray-900 items-center">
              <div className="mr-5">
              <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>

        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Citas</span>
          
        </div>
      </div>
    </div>
              </div>

              <div className="flex-none gap-2 ">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-xs font-black mr-16 ml-3">
                <h1>Jennifer Peralta</h1>
              </div>
            </div>
          </div>
        </div>
      </nav>  



      
    </>
  );
};

export default NavBar;
