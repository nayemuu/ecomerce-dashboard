import React, { useEffect, useRef, useState } from 'react';
import './DropdownInput.css';
import DropdownOptions from './DropdownOptions/DropdownOptions';

function DropdownInput({
  inputType,
  label,
  value,
  setValue,
  mandatory,
  options,
  labelBackgroundColor,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownSectionRef = useRef(null);

  const handleOutsideClick = (event) => {
    // console.log('Inside handleOutsideClick function')
    // console.log('showSelectTopicsOption = ', showSelectTopicsOption);
    // if (dropdownSectionRef.current?.contains(event.target)) {
    //   console.log('dropdownSectionRef.current.contains(event.target) = ', dropdownSectionRef.current.contains(event.target));
    // }

    if (dropdownSectionRef.current?.contains(event.target)) {
      // console.log('dropdownSectionRef.current.contains(event.target) = ', dropdownSectionRef.current.contains(event.target));
      // console.log('Clicked Inside');
    } else {
      // console.log('Clicked Outside');
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // console.log('yoo')
    document.addEventListener('click', handleOutsideClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleSelect = (title) => {
    setValue(title);
    setIsDropdownOpen(false);
  };

  return (
    <div ref={dropdownSectionRef}>
      <div
        className="custom-input-wrapper"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <input
          type={inputType}
          id="exampleFormControlInput1"
          className="custom-input"
          placeholder=" "
          value={value}
          onChange={() => {}}
          required={mandatory}
        />
        <label htmlFor="exampleFormControlInput1" className="custom-label">
          <div
            className="custom-label-text-container"
            style={{
              backgroundColor: labelBackgroundColor
                ? labelBackgroundColor
                : '#fafafa',
            }}
          >
            {label}
            {mandatory && (
              <span
                style={{
                  color: '#D13F97',
                  marginLeft: '2px',
                }}
              >
                *
              </span>
            )}
          </div>
        </label>

        <div className="absolute top-0 right-3 flex justify-center items-center h-full">
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.701894 3.07706L4.47898 6.85415C5.04773 7.4229 5.96648 7.4229 6.53523 6.85415L10.3123 3.07706C11.2311 2.15831 10.5748 0.583313 9.27689 0.583313H1.72273C0.42481 0.583313 -0.216856 2.15831 0.701894 3.07706Z"
              fill="#757575"
            />
          </svg>
        </div>
      </div>

      {isDropdownOpen && (
        <DropdownOptions
          options={options}
          value={value}
          setValue={value}
          handleClick={handleSelect}
        />
      )}
    </div>
  );
}

DropdownInput.defaultProps = {
  mandatory: false,
};

export default DropdownInput;
