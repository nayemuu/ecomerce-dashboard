import { IoEllipse, IoEllipseOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

function SideBarAccordianBodyItem({ children, link, logo }) {
  const location = useLocation();
  const { pathname } = location;

  let content = null;

  if (logo) {
    content = children;
  } else {
    content = (
      <>
        {pathname === link ? <IoEllipse /> : <IoEllipseOutline />}
        {children}
      </>
    );
  }

  return (
    <Link to={link}>
      <div
        className={`block text-left border-t py-3 border-red-200 text-base px-2 cursor-pointer hover:text-[#2792d0] ${
          pathname === link && 'text-green-600 font-medium'
        }`}
      >
        <div className="flex items-center gap-x-2">{content}</div>
      </div>
    </Link>
  );
}

export default SideBarAccordianBodyItem;
