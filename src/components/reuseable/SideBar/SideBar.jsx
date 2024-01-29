import { useEffect, useState } from 'react';
import { BsBoxSeamFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlinePayment } from 'react-icons/md';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Navigate from '../../../helper/Navigate';
import ProductsDropDown from './DropDown/ProductsDropDown/ProductsDropDown';
import './SideBar.css';

function SideBar() {
  const { status: SideBarStatus } = useSelector((state) => state.SideBar);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndexByRoute, setActiveIndexByRoute] = useState(null);

  const location = useLocation();
  const { pathname } = location;

  const handleActiveIndex = (index) => {
    if (!activeIndex || activeIndex !== index) {
      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    if (pathname === '/') {
      setActiveIndexByRoute(1);
    }

    if (
      pathname === '/productList' ||
      pathname === '/addProduct' ||
      pathname === '/category' ||
      pathname === '/subCategory' ||
      pathname === '/location'
    ) {
      setActiveIndexByRoute(3);
    }
  }, []);

  return (
    <div
      className={`${
        SideBarStatus ? 'translate-x-0' : '-translate-x-full'
      } sidebar-container transition-all duration-200 ease-linear`}
    >
      <div className="mt-5 flex flex-col gap-[1px]">
        <Navigate href="/">
          <div
            className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
              (activeIndex === 1 || activeIndexByRoute === 1) &&
              'bg-[#1B2850] text-white'
            }`}
            onClick={() => handleActiveIndex(1)}
          >
            <RxDashboard />
            Dashboard
          </div>
        </Navigate>

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
            (activeIndex === 2 || activeIndexByRoute === 2) &&
            'bg-[#1B2850] text-white'
          }`}
          onClick={() => handleActiveIndex(2)}
        >
          <RiShoppingCart2Fill />
          Orders
        </div>

        <div>
          <div
            className={`flex items-center justify-between gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
              (activeIndex === 3 || activeIndexByRoute === 3) &&
              'bg-[#1B2850] text-white'
            }`}
            onClick={() => handleActiveIndex(3)}
          >
            <div className="flex items-center gap-4">
              <BsBoxSeamFill />
              Products
            </div>

            <div
              className={`duration-200 ease-linear ${
                activeIndex === 3 || activeIndexByRoute === 3
                  ? 'rotate-180'
                  : 'rotate-0'
              }`}
            >
              <IoIosArrowDown />
            </div>
          </div>

          {(activeIndex === 3 || activeIndexByRoute === 3) && (
            <div className="px-4 ">
              <ProductsDropDown />
            </div>
          )}
        </div>

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
            (activeIndex === 4 || activeIndexByRoute === 4) &&
            'bg-[#1B2850] text-white'
          }`}
          onClick={() => handleActiveIndex(4)}
        >
          <MdOutlinePayment />
          Payment
        </div>

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
            (activeIndex === 5 || activeIndexByRoute === 5) &&
            'bg-[#1B2850] text-white'
          }`}
          onClick={() => handleActiveIndex(5)}
        >
          <FaUsers />
          Users
        </div>

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
            (activeIndex === 6 || activeIndexByRoute === 6) &&
            'bg-[#1B2850] text-white'
          }`}
          onClick={() => handleActiveIndex(6)}
        >
          <FaUsers />
          Users
        </div>
      </div>
    </div>
  );
}

export default SideBar;
