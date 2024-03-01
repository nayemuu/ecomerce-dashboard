import { BsPersonFillAdd } from 'react-icons/bs';
import { FaAddressBook, FaUsers } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Navigate from '../../../../../helper/Navigate';

function UserDropDown() {
  const location = useLocation();
  const { pathname } = location;
  // console.log('pathname = ', pathname);
  // let res = pathname === '/category';
  // console.log('res = ', res);

  return (
    <div>
      <Navigate href="/users">
        <div
          className={`block text-left border-t py-3 border-red-200 text-base px-2 cursor-pointer hover:text-[#2792d0] ${
            pathname === '/users' && 'text-green-600 font-medium'
          }`}
        >
          <div className="flex items-center gap-x-2">
            <FaUsers />
            Users
          </div>
        </div>
      </Navigate>

      <Navigate href="/add-user">
        <div
          className={`block text-left border-t py-3 border-red-200 text-base px-2 cursor-pointer hover:text-[#2792d0] ${
            pathname === '/add-user' && 'text-green-600 font-medium'
          }`}
        >
          <div className="flex items-center gap-x-2">
            <BsPersonFillAdd />
            Add User
          </div>
        </div>
      </Navigate>

      <Navigate href="/user-biography">
        <div
          className={`block text-left border-t py-3 border-red-200 text-base px-2 cursor-pointer hover:text-[#2792d0] ${
            pathname === '/user-biography' && 'text-green-600 font-medium'
          }`}
        >
          <div className="flex items-center gap-x-2">
            <FaAddressBook />
            Biography
          </div>
        </div>
      </Navigate>
    </div>
  );
}

export default UserDropDown;
