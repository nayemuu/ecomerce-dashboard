import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

function SideBarAccordianHeader(props) {
  const {
    activeIndex,
    index,
    children,
    handleClick,
    sidebarBody = true,
    link,
  } = props;

  let content;
  if (sidebarBody) {
    content = (
      <div
        className={`flex items-center justify-between gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
          activeIndex === index && 'bg-[#1B2850] text-white'
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center gap-4">{children}</div>

        <div
          className={`duration-200 ease-linear ${
            activeIndex === index ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <IoIosArrowDown />
        </div>
      </div>
    );
  } else {
    content = (
      <Link to={link}>
        <div
          className={`flex items-center gap-4 rounded-sm py-[11px] px-[15px] font-medium text-lg text-[#1B2850] duration-300 ease-in-out cursor-pointer hover:bg-[hsl(225,50%,41%)] hover:text-white ${
            activeIndex === index && 'bg-[#1B2850] text-white'
          }`}
          onClick={handleClick}
        >
          {children}
        </div>
      </Link>
    );
  }

  return content;
}

export default SideBarAccordianHeader;
