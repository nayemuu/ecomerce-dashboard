import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { CiEdit, CiSearch } from 'react-icons/ci';
import { IoFilter } from 'react-icons/io5';
import { PiEye } from 'react-icons/pi';
import Navbar from '../../components/reuseable/Navbar/Navbar';
import SideBarContainer from '../../components/reuseable/SideBar/SideBarContainer';
import './Users.css';

function Users() {
  const [searchboxStatus, setSearchboxStatus] = useState(false);
  return (
    <div>
      <SideBarContainer>
        <Navbar />
        <div className="container">
          <div className="mt-8">
            <div className="light-card">
              <div className="flex justify-between items-center gap-5 mb-3">
                <div className="section-title">Users</div>

                <div className="flex justify-between items-center gap-5">
                  <div className="relative h-[36px] flex items-center">
                    <div className="h-full w-[30px] flex justify-center items-center absolute right-[3px]">
                      <div
                        className="text-xl font-extrabold cursor-pointer hover:text-green-500 duration-300"
                        onClick={() => setSearchboxStatus(!searchboxStatus)}
                      >
                        <CiSearch />
                      </div>

                      {/* <div className="h-[36px] w-[36px] flex justify-center items-center text-xl font-extrabold cursor-pointer bg-gradient-to-r from-[#D13F97] to-[#833586] rounded-full hover:text-green-500 duration-300 outline-double outline-4 outline-[#e671b5]">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.75 15.8333C12.6621 15.8333 15.8333 12.6621 15.8333 8.75C15.8333 4.83792 12.6621 1.66667 8.75 1.66667C4.83792 1.66667 1.66667 4.83792 1.66667 8.75C1.66667 12.6621 4.83792 15.8333 8.75 15.8333Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.1071 5.97625C10.7979 5.66627 10.4305 5.42044 10.026 5.2529C9.62147 5.08536 9.18784 4.99942 8.75001 5C8.31218 4.99942 7.87855 5.08536 7.47405 5.2529C7.06954 5.42044 6.70213 5.66627 6.39293 5.97625M13.8425 13.8425L17.3779 17.3779"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div> */}
                    </div>

                    <input
                      type="text"
                      placeholder="Search..."
                      className={`rounded-full outline-none focus:border-green-500 ${
                        searchboxStatus
                          ? 'w-[300px] h-full pl-5 pr-[35px] border border-[#AAB8C2] duration-300'
                          : 'w-[0px] h-[0px] pl-0 border-0 invisible relative right-2'
                      }`}
                    />
                  </div>

                  {/* <div className="flex items-center rounded-full space-x-3 lg:space-x-8 p-1 px-2 relative">
                    <input
                      type="text"
                      maxLength="40"
                      placeholder="Search news by keywords ..."
                      className={`pl-3 font-thin outline-dotted outline-green-600 outline-2 text-black absolute p-1 right-2 duration-300 ${
                        searchboxStatus
                          ? 'w-[46rem] xl:w-96 h-8 text-lg rounded-full backdrop-blur-sm'
                          : 'w-0 opacity-0'
                      }`}
                    />
                    <button
                      onClick={() => setSearchboxStatus(!searchboxStatus)}
                    >
                      <img
                        src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.0794%2015.2486C12.9343%2015.2486%2015.2487%2012.9342%2015.2487%2010.0793C15.2487%207.22439%2012.9343%204.91003%2010.0794%204.91003C7.22452%204.91003%204.91016%207.22439%204.91016%2010.0793C4.91016%2012.9342%207.22452%2015.2486%2010.0794%2015.2486Z'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M13.7344%2013.7342L17.7435%2017.7439'%20stroke='black'%20stroke-width='1.5'%20/%3e%3c/svg%3e"
                        className={`duration-500 bg-white p-1 rounded-full z-50 size-8 shadow-black hover:scale-105 ${
                          searchboxStatus &&
                          'rotate-[360deg] outline-double outline-4 outline-green-600 bg-[#00d991]'
                        }`}
                      />
                    </button>
                  </div> */}

                  <div className="text-lg font-bold cursor-pointer hover:text-green-500">
                    <IoFilter />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                          <tr>
                            <th scope="col" className="py-3 ps-4">
                              <div className="flex items-center h-5">
                                <input
                                  id="hs-table-checkbox-all"
                                  type="checkbox"
                                  className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                />
                                <label
                                  htmlFor="hs-table-checkbox-all"
                                  className="sr-only"
                                >
                                  Checkbox
                                </label>
                              </div>
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                            >
                              User Name
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                            >
                              Phone Number
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                            >
                              email
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                            >
                              Role
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                            >
                              Created At
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                            >
                              Authorized Groups
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          <tr className="hover:bg-[#eee]">
                            <td className="py-3 ps-4">
                              <div className="flex items-center h-5">
                                <input
                                  id="hs-table-checkbox-1"
                                  type="checkbox"
                                  className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                />
                                <label
                                  htmlFor="hs-table-checkbox-1"
                                  className="sr-only"
                                >
                                  Checkbox
                                </label>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                              Nayem
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                              019****
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                              nayem@gmail.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              Super User
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              10 Feb 2024
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              Active
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              Group 1
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                              <div className="h-full flex items-center gap-[5px]">
                                <div className="text-[22px] text-[#637381] hover:text-green-500 cursor-pointer">
                                  <PiEye />
                                </div>

                                <div className="text-[22px] text-[#637381] hover:text-green-500 cursor-pointer">
                                  <CiEdit />
                                </div>

                                <div className="text-[22px] text-[#637381] hover:text-red-600 cursor-pointer">
                                  <AiOutlineDelete />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBarContainer>
    </div>
  );
}

export default Users;
