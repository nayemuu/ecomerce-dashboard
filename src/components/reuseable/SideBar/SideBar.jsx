import { useEffect, useState } from 'react';
import { BsBoxSeamFill, BsPersonFillAdd } from 'react-icons/bs';
import { FaAddressBook, FaUsers } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';
import { MdOutlinePayment } from 'react-icons/md';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { isSectionActiveViaRoute } from '../../../utils/for-Sidebar/Sidebar';
import './SideBar.css';
import SideBarAccordianBody from './SideBarAccordianItem/SideBarAccordianBody/SideBarAccordianBody';
import SideBarAccordianBodyItem from './SideBarAccordianItem/SideBarAccordianBody/SideBarAccordianBodyItem/SideBarAccordianBodyItem';
import SideBarAccordianHeader from './SideBarAccordianItem/SideBarAccordianHeader/SideBarAccordianHeader';

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
        <div>
          <SideBarAccordianHeader
            activeIndex={activeIndex}
            index={1}
            handleClick={() => handleActiveIndex(1)}
            sidebarBody={false}
            link="/"
          >
            <RxDashboard />
            Dashboard
          </SideBarAccordianHeader>
        </div>

        <div>
          <SideBarAccordianHeader
            activeIndex={activeIndex}
            index={2}
            handleClick={() => handleActiveIndex(2)}
            sidebarBody={false}
            link="/"
          >
            <RiShoppingCart2Fill />
            Orders
          </SideBarAccordianHeader>
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

        <div>
          <SideBarAccordianHeader
            activeIndex={activeIndex}
            index={4}
            handleClick={() => handleActiveIndex(4)}
            sidebarBody={false}
            link="/"
          >
            <MdOutlinePayment />
            Payment
          </SideBarAccordianHeader>
        </div>

        <div>
          <SideBarAccordianHeader
            activeIndex={activeIndex}
            index={5}
            handleClick={() => handleActiveIndex(5)}
          >
            <GrUserSettings />
            User
          </SideBarAccordianHeader>

          <SideBarAccordianBody activeIndex={activeIndex} index={5}>
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
