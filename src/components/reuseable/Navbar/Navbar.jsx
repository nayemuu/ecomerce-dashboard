import React from "react";
import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { changeSidebarStatus } from "../../../redux/features/SideBar/SideBarSlice";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();

  const SideBarHandler = () => {
    dispatch(changeSidebarStatus());
    // console.log('SideBarStatus = ', SideBarStatus);
  };

  return (
    <div className="header">
      <div className="container flex items-center justify-between gap-5 relative">
        <div
          className="text-xl font-bold cursor-pointer hover:text-green-500"
          onClick={() => SideBarHandler()}
        >
          <FiMenu />
        </div>

        <div className="flex items-center gap-5">yoo</div>
      </div>
    </div>
  );
}

export default Navbar;
