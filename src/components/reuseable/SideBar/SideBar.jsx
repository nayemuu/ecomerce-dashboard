import { useEffect, useRef, useState } from 'react';
import { BsBoxSeamFill, BsPersonFillAdd } from 'react-icons/bs';
import { FaAddressBook, FaUsers } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';
import { MdOutlinePayment } from 'react-icons/md';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { isSectionActiveViaRoute } from '../../../utils/for-Sidebar/Sidebar';
import './SideBar.css';
import SideBarAccordianBody from './SideBarAccordianItem/SideBarAccordianBody/SideBarAccordianBody';
import SideBarAccordianBodyItem from './SideBarAccordianItem/SideBarAccordianBody/SideBarAccordianBodyItem/SideBarAccordianBodyItem';
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
        <Link to="/">
          <div
            className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
              activeIndex === 1 && 'bg-[#1B2850] text-white'
            }`}
            onClick={() => handleActiveIndex(1)}
          >
            <RxDashboard />
            Dashboard
          </div>
        </Link>

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
          <SideBarAccordianHeader
            activeIndex={activeIndex}
            index={3}
            handleClick={() => handleActiveIndex(3)}
          >
            <BsBoxSeamFill />
            Products
          </SideBarAccordianHeader>

          <SideBarAccordianBody activeIndex={activeIndex} index={3}>
            <SideBarAccordianBodyItem link="/productList" logo={false}>
              Product List
            </SideBarAccordianBodyItem>

            <SideBarAccordianBodyItem link="/addProduct" logo={false}>
              Add Product
            </SideBarAccordianBodyItem>

            <SideBarAccordianBodyItem link="/category" logo={false}>
              Category
            </SideBarAccordianBodyItem>

            <SideBarAccordianBodyItem link="/subCategory" logo={false}>
              Sub Category
            </SideBarAccordianBodyItem>

            <SideBarAccordianBodyItem link="/location" logo={false}>
              Location
            </SideBarAccordianBodyItem>
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

        <Link to="/users">
          <div
            className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
              activeIndex === 5 && 'bg-[#1B2850] text-white'
            }`}
            onClick={() => handleActiveIndex(5)}
          >
            <FaUsers />
            Users
          </div>
        </Link>

        <Link to="/users2">
          <div
            className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
              activeIndex === 6 && 'bg-[#1B2850] text-white'
            }`}
            onClick={() => handleActiveIndex(6)}
          >
            <FaUsers />
            Users
          </div>
        </Link>

        <div>
          <SideBarAccordianHeader
            activeIndex={activeIndex}
            index={7}
            handleClick={() => handleActiveIndex(7)}
          >
            <GrUserSettings />
            User
          </SideBarAccordianHeader>

          <SideBarAccordianBody activeIndex={activeIndex} index={7}>
            <SideBarAccordianBodyItem link="/users" logo={true}>
              <FaUsers />
              Users
            </SideBarAccordianBodyItem>

            <SideBarAccordianBodyItem link="/add-user" logo={true}>
              <BsPersonFillAdd />
              Add User
            </SideBarAccordianBodyItem>

            <SideBarAccordianBodyItem link="/user-biography" logo={true}>
              <FaAddressBook />
              Biography
            </SideBarAccordianBodyItem>
          </SideBarAccordianBody>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
