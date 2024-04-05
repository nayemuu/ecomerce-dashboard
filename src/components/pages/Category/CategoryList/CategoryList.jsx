import Table1Demo from '../../../../demoOfReUseableComponents/Table/Table1/Table1Demo';

function CategoryList() {
  let headers = ['Category Name', 'Location'];
  let data = [{ category: 'Baby food', location: 'Foodbox' }];

  return (
    <div>
      {/* <div className="p-6 bg-[#f3f6fa] rounded-sm">
        <div className="section-title">Add Products Category</div>

        <div className="flex flex-col mt-5">
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
                        Category Id
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                      >
                        Category Name
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                      >
                        Location
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
                        10
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        Baby food
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        Foodbox
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <div className="h-full flex items-center gap-[5px]">
                          <div className="text-[22px] text-[#637381] hover:text-green-500 cursor-pointer">
                            <CiEdit />
                          </div>

                          <div className="text-[22px] text-[#637381] hover:text-red-600 cursor-pointer">
                            <AiOutlineDelete />
                          </div>
                        </div>
                      </td>
                    </tr>
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
                        10
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        Baby food
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        Foodbox
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <div className="h-full flex items-center gap-[5px]">
                          <div className="text-[22px] text-[#637381] hover:text-green-500 cursor-pointer">
                            <CiEdit />
                          </div>

                          <div className="text-[22px] text-[#637381] hover:text-red-600 cursor-pointer">
                            <AiOutlineDelete />
                          </div>
                        </div>
                      </td>
                    </tr>

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
                        10
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        Baby food
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        Foodbox
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <div className="h-full flex items-center gap-[5px]">
                          <div className="text-[22px] text-[#637381] hover:text-green-500 cursor-pointer">
                            <CiEdit />
                          </div>

                          <div className="text-[22px] text-[#637381] hover:text-red-600 cursor-pointer">
                            <AiOutlineDelete />
                          </div>
                        </div>
                      </td>
                    </tr>

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
                        10
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        Baby food
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        Foodbox
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <div className="h-full flex items-center gap-[5px]">
                          <div className="text-[22px] text-[#637381] hover:text-green-500 cursor-pointer">
                            <CiEdit />
                          </div>

                          <div className="text-[22px] text-[#637381] hover:text-red-600 cursor-pointer">
                            <AiOutlineDelete />
                          </div>
                        </div>
                      </td>
                    </tr>

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
                        10
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        Baby food
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        Foodbox
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <div className="h-full flex items-center gap-[5px]">
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
      </div> */}

      {/* <div className="p-6 bg-[#f3f6fa] rounded-sm">
        <Table1
          totalColumnForData={2}
          title="Add Products Category"
          headers={headers}
        />
      </div> */}

      <Table1Demo />
    </div>
  );
}

export default CategoryList;
