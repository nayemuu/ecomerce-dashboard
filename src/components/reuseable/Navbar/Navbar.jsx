import { FiMenu } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { changeSidebarStatus } from '../../../redux/features/SideBar/SideBarSlice';
import { BsFullscreen } from 'react-icons/bs';
// import User from "./Navbar Mini Components/User/User";
import UserLoggedIn from './Navbar Mini Components/User/UserLoggedIn';
import './Navbar.css';
import { useState } from 'react';

function Navbar() {
  const [fullScreen, setFullScreen] = useState(false);
  const dispatch = useDispatch();

  const SideBarHandler = () => {
    dispatch(changeSidebarStatus());
    // console.log('SideBarStatus = ', SideBarStatus);
  };

  const handleScreenSize = () => {
    if (fullScreen === false) {
      setFullScreen(true);
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        /* Safari */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        /* IE11 */
        document.documentElement.msRequestFullscreen();
      }
    } else {
      setFullScreen(false);
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div className="header">
      <div>
        <div className="flex items-center justify-between gap-5 relative">
          <div
            className="text-xl font-bold cursor-pointer hover:text-green-500 bg-[#eeecec] p-2 rounded-md hover:bg-[#1B2850]/10"
            onClick={SideBarHandler}
          >
            <FiMenu />
          </div>

          <div className="flex items-center gap-5">
            <div
              className="text-xl font-bold cursor-pointer hover:text-green-500 bg-[#eeecec] p-2 rounded-md hover:bg-[#1B2850]/10"
              onClick={handleScreenSize}
            >
              <BsFullscreen />
            </div>

            {/* <User /> */}
            <UserLoggedIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
