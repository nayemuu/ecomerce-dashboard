import { useSelector } from "react-redux";
import SideBar from "./SideBar";

function SideBarContainer({ children }) {
  const { status: SideBarStatus } = useSelector((state) => state.SideBar);

  return (
    <div>
      <SideBar />
      <div
        className={`${
          SideBarStatus ? "ml-[250px]" : "ml-0"
        } transition-all duration-200 ease-linear`}
      >
        {children}
      </div>
    </div>
  );
}

export default SideBarContainer;
