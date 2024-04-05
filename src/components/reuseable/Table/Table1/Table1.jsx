import Table1Row from './Table1Row';

function Table1(props) {
  const {
    title,
    totalColumnForData,
    headers,
    data,
    fieldToShow,
    handleSingleCheckBox,
    handleAllCheckBox,
    selectedIds,
    actionButtons,
    handleView,
    handleEdit,
    handleDelete,
  } = props;

  if (!title) {
    return alert('title is missing');
  }
  if (!headers) {
    return alert('headers is missing');
  }

  if (totalColumnForData !== headers.length) {
    return alert(
      `headers length - (${headers.length}) did not match total number of columnn for Data - (${totalColumnForData})`
    );
  }

  let content = <></>;

  if (data.length) {
    content = (
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {data.map((item, index) => (
          <Table1Row
            key={index}
            item={item}
            fieldToShow={fieldToShow}
            index={index}
            handleSingleCheckBox={handleSingleCheckBox}
            selectedIds={selectedIds}
            actionButtons={actionButtons}
            handleView={handleView}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </tbody>
    );
  }

  return (
    <div>
      <div className="section-title">{title}</div>

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
                          type="checkbox"
                          className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 cursor-pointer"
                          onClick={handleAllCheckBox}
                        />
                      </div>
                    </th>

                    {headers.map((header, index) => (
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                        key={index}
                      >
                        {header}
                      </th>
                    ))}

                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                {content}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table1;
