import { useEffect, useRef, useState } from 'react';
import { BsBoxSeamFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlinePayment } from 'react-icons/md';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Navigate from '../../../helper/Navigate';
import { isSectionActiveViaRoute } from '../../../utils/for-Sidebar/Sidebar';
import ProductsDropDown from './DropDown/ProductsDropDown/ProductsDropDown';
import UserDropDown from './DropDown/UserDropDown/UserDropDown';
import './SideBar.css';
import SideBarAccordianBody from './SideBarAccordianItem/SideBarAccordianBody/SideBarAccordianBody';
import SideBarAccordianHeader from './SideBarAccordianItem/SideBarAccordianHeader/SideBarAccordianHeader';

function SideBar() {
  const { status: SideBarStatus } = useSelector((state) => state.SideBar);
  const [activeIndex, setActiveIndex] = useState(null);

  const ref = useRef(null);

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
      setActiveIndex(1);
    }

    if (
      isSectionActiveViaRoute(pathname, [
        '/productList',
        '/addProduct',
        '/category',
        '/subCategory',
        '/location',
      ])
    ) {
      setActiveIndex(3);
    }

    if (isSectionActiveViaRoute(pathname, ['/users'])) {
      setActiveIndex(7);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              activeIndex === 1 && 'bg-[#1B2850] text-white'
            }`}
            onClick={() => handleActiveIndex(1)}
          >
            <RxDashboard />
            Dashboard
          </div>
        </Navigate>

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
            activeIndex === 2 && 'bg-[#1B2850] text-white'
          }`}
          onClick={() => handleActiveIndex(2)}
        >
          <RiShoppingCart2Fill />
          Orders
        </div>

        <div>
          {/* <div
            className={`flex items-center justify-between gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
              activeIndex === 3 && 'bg-[#1B2850] text-white'
            }`}
            onClick={() => handleActiveIndex(3)}
          >
            <div className="flex items-center gap-4">
              <BsBoxSeamFill />
              Products
            </div>

            <div
              className={`duration-200 ease-linear ${
                activeIndex === 3 ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <IoIosArrowDown />
            </div>
          </div> */}

          {/* <div
            className="overflow-y-hidden transition-all duration-200 ease-linear"
            style={{
              height: activeIndex === 3 ? ref.current?.offsetHeight || 0 : 0,
            }}
          >
            <div className="px-4" ref={ref}>
              <ProductsDropDown />
            </div>
          </div> */}

          <SideBarAccordianHeader
            activeIndex={activeIndex}
            index={3}
            handleClick={() => handleActiveIndex(3)}
          >
            <BsBoxSeamFill />
            Products
          </SideBarAccordianHeader>

          <SideBarAccordianBody activeIndex={activeIndex} index={3}>
            <ProductsDropDown />
          </SideBarAccordianBody>
        </div>

        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
            activeIndex === 4 && 'bg-[#1B2850] text-white'
          }`}
          onClick={() => handleActiveIndex(4)}
        >
          <MdOutlinePayment />
          Payment
        </div>

        <Navigate href="/users">
          <div
            className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
              activeIndex === 5 && 'bg-[#1B2850] text-white'
            }`}
            onClick={() => handleActiveIndex(5)}
          >
            <FaUsers />
            Users
          </div>
        </Navigate>

        <Navigate href="/users2">
          <div
            className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
              activeIndex === 6 && 'bg-[#1B2850] text-white'
            }`}
            onClick={() => handleActiveIndex(6)}
          >
            <FaUsers />
            Users
          </div>
        </Navigate>

        <div>
          <div
            className={`flex items-center justify-between gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
              activeIndex === 7 && 'bg-[#1B2850] text-white'
            }`}
            onClick={() => handleActiveIndex(7)}
          >
            <div className="flex items-center gap-4">
              <GrUserSettings />
              User
            </div>

            <div
              className={`duration-200 ease-linear ${
                activeIndex === 7 ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <IoIosArrowDown />
            </div>
          </div>

          <SideBarAccordianBody activeIndex={activeIndex} index={7}>
            <UserDropDown />
          </SideBarAccordianBody>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
