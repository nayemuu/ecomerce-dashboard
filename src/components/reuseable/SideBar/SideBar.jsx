import { useState } from 'react';
import { BsBoxSeamFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlinePayment } from 'react-icons/md';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import ProductsDropDown from './DropDown/ProductsDropDown/ProductsDropDown';
import './SideBar.css';
import { useLocation } from 'react-router-dom';

function SideBar() {
  const { status: SideBarStatus } = useSelector((state) => state.SideBar);
  const [activeIndex, setActiveIndex] = useState(null);

  const location = useLocation();
  const { pathname } = location;

  const handleActiveIndex = (index) => {
    if (!activeIndex || activeIndex !== index) {
      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  return (
    <div
      className={`${
        SideBarStatus ? 'translate-x-0' : '-translate-x-full'
      } sidebar-container transition-all duration-200 ease-linear`}
    >
      <div className="mt-5 flex flex-col gap-[1px]">
        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer ${
            pathname.includes('/dashboard')
              ? 'bg-[#1B2850] text-white'
              : ' hover:bg-[hsl(225,50%,41%)] hover:text-white'
          }`}
        >
          <RxDashboard />
          Dashboard
        </div>

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer ${
            pathname.includes('/dashboard')
              ? 'bg-[#1B2850] text-white'
              : ' hover:bg-[hsl(225,50%,41%)] hover:text-white'
          }`}
        >
          <RiShoppingCart2Fill />
          Orders
        </div>

        <div>
          <div
            className={`flex items-center justify-between gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer ${
              pathname.includes('category')
                ? 'bg-[#1B2850] text-white'
                : ' hover:bg-[hsl(225,50%,41%)] hover:text-white'
            }`}
            onClick={() => handleActiveIndex(1)}
          >
            <div className="flex items-center gap-4">
              <BsBoxSeamFill />
              Products
            </div>

            <div
              className={`duration-200 ease-linear ${
                activeIndex === 1 ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <IoIosArrowDown />
            </div>
          </div>

          {activeIndex === 1 && (
            <div className="px-4 ">
              <ProductsDropDown />
            </div>
          )}
        </div>

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer ${
            pathname.includes('/dashboard')
              ? 'bg-[#1B2850] text-white'
              : ' hover:bg-[hsl(225,50%,41%)] hover:text-white'
          }`}
        >
          <MdOutlinePayment />
          Payment
        </div>

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer ${
            pathname.includes('/dashboard')
              ? 'bg-[#1B2850] text-white'
              : ' hover:bg-[hsl(225,50%,41%)] hover:text-white'
          }`}
        >
          <FaUsers />
          Users
        </div>

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer ${
            pathname.includes('/dashboard')
              ? 'bg-[#1B2850] text-white'
              : ' hover:bg-[hsl(225,50%,41%)] hover:text-white'
          }`}
        >
          <FaUsers />
          Users
        </div>
      </div>
    </div>
  );
}

export default SideBar;
