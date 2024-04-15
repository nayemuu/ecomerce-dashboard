import { useEffect, useState } from "react";

import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { PiEye } from "react-icons/pi";
function Table1Row(props) {
  const {
    item,
    fieldToShow,
    index,
    handleSingleCheckBox,
    selectedIds,
    actionButtons,
    handleView,
    handleEdit,
    handleDelete,
  } = props;
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedIds.includes(item.id)) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedIds]);

  const handleAlert = (index, key) => {
    alert(`In line no ${index + 1}, "${key}" field is Missing`);
    return "missing";
  };

  return (
    <tr className="hover:bg-[#eee]" key={index}>
      <td className="py-3 ps-4" key={item.id}>
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 cursor-pointer"
            onChange={() => handleSingleCheckBox(item.id)}
            checked={isSelected}
          />
        </div>
      </td>

      {fieldToShow.map((targetField, i) =>
        item[targetField] ? (
          <td
            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
            key={i}
          >
            {item[targetField]}
          </td>
        ) : (
          <td
            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600"
            key={i}
          >
            {handleAlert(index, targetField)}
          </td>
        )
      )}

      <td
        className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
        key={`${item.id}-action`}
      >
        <div className="h-full flex items-center gap-[5px]">
          {actionButtons.view && (
            <div
              className="text-[22px] text-[#637381] hover:text-green-500 cursor-pointer"
              onClick={() => handleView(item.id)}
            >
              <PiEye />
            </div>
          )}

          {actionButtons.edit && (
            <div
              className="text-[22px] text-[#637381] hover:text-green-500 cursor-pointer"
              onClick={() => handleEdit(item.id)}
            >
              <CiEdit />
            </div>
          )}

          {actionButtons.delete && (
            <div
              className="text-[22px] text-[#637381] hover:text-red-600 cursor-pointer"
              onClick={() => handleDelete(item.id)}
            >
              <AiOutlineDelete />
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default Table1Row;
