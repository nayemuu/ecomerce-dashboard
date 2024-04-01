import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { CiEdit, CiSearch } from 'react-icons/ci';
import { IoFilter } from 'react-icons/io5';
import { PiEye } from 'react-icons/pi';
import Navbar from '../../../components/reuseable/Navbar/Navbar';
import SideBarContainer from '../../../components/reuseable/SideBar/SideBarContainer';

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
