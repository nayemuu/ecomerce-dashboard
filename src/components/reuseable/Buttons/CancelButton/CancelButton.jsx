import React from 'react';

function CancelButton({ children, isLoading, disable }) {
  return (
    <button
      type="button"
      disabled={isLoading || disable}
      className={`w-full flex justify-center items-center gap-2 py-3 px-4 border bg-[#637381] hover:bg-[#637381]/80  border-transparent text-lg leading-[22px] font-medium rounded-md text-white transition duration-150 ease-in-out ${
        isLoading || disable ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      {children}
    </button>
  );
}

export default CancelButton;
