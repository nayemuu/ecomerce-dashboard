import { IoEllipse, IoEllipseOutline } from 'react-icons/io5';
import Navigate from '../../../../../helper/Navigate';
import { useLocation } from 'react-router-dom';

function ProductsDropDown() {
  const location = useLocation();
  const { pathname } = location;
  // console.log('pathname = ', pathname);
  // let res = pathname === '/category';
  // console.log('res = ', res);

  return (
    <div>
      <Navigate href="/productList">
        <div
          className={`block text-left border-t py-3 border-red-200 text-base px-2 cursor-pointer hover:text-[#2792d0] ${
            pathname === '/productList' && 'text-green-600 font-medium'
          }`}
        >
          <div className="flex items-center gap-x-2">
            {pathname === '/productList' ? <IoEllipse /> : <IoEllipseOutline />}
            Product List
          </div>
        </div>
      </Navigate>

      <Navigate href="/addProduct">
        <div
          className={`block text-left border-t py-3 border-red-200 text-base px-2 cursor-pointer hover:text-[#2792d0] ${
            pathname === '/addProduct' && 'text-green-600 font-medium'
          }`}
        >
          <div className="flex items-center gap-x-2">
            {pathname === '/addProduct' ? <IoEllipse /> : <IoEllipseOutline />}
            Add Product
          </div>
        </div>
      </Navigate>

      <Navigate href="/category">
        <div
          className={`block text-left border-t py-3 border-red-200 text-base px-2 cursor-pointer hover:text-[#2792d0] ${
            pathname === '/category' && 'text-green-600 font-medium'
          }`}
        >
          <div className="flex items-center gap-x-2">
            {pathname === '/category' ? <IoEllipse /> : <IoEllipseOutline />}
            Category
          </div>
        </div>
      </Navigate>

      <Navigate href="/subCategory">
        <div
          className={`block text-left border-t py-3 border-red-200 text-base px-2 cursor-pointer hover:text-[#2792d0] ${
            pathname === '/subCategory' && 'text-green-600 font-medium'
          }`}
        >
          <div className="flex items-center gap-x-2">
            {pathname === '/subCategory' ? <IoEllipse /> : <IoEllipseOutline />}
            Sub Category
          </div>
        </div>
      </Navigate>

      <Navigate href="/location">
        <div
          className={`block text-left border-t py-3 border-red-200 text-base px-2 cursor-pointer hover:text-[#2792d0] ${
            pathname === '/location' && 'text-green-600 font-medium'
          }`}
        >
          <div className="flex items-center gap-x-2">
            {pathname === '/location' ? <IoEllipse /> : <IoEllipseOutline />}
            Location
          </div>
        </div>
      </Navigate>
    </div>
  );
}

export default ProductsDropDown;
