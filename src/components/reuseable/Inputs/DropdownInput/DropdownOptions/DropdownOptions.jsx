import DropdownOptionsItem from './DropdownOptionsItem';

function DropdownOptions({ options, handleClick, value }) {
  return (
    <div className="border border-gray-300 mt-[4px]">
      {options.map((item, index) => (
        <DropdownOptionsItem
          key={index}
          item={item}
          handleClick={handleClick}
          value={value}
        />
      ))}
    </div>
  );
}

export default DropdownOptions;
