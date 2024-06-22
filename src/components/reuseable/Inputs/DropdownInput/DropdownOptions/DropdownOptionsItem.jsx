function DropdownOptionsItem({ item, handleClick, value }) {
  let isSelected = !!(value === item);
  //   console.log('isSelected = ', isSelected);
  return (
    <div
      className={`block text-left py-3 text-base font-normal leading-[19.09px] hover:bg-gray-200 px-2 cursor-pointer ${
        isSelected ? 'bg-[#833586]/10' : ''
      }`}
      onClick={() => handleClick(item)}
    >
      {item}
    </div>
  );
}

export default DropdownOptionsItem;
