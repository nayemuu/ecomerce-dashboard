import React from 'react';

function BlackWhiteSubmitButtonWithHFull({ children, isLoading, disable }) {
  return (
    <button
      type="submit"
      disabled={isLoading || disable}
      className={`w-full h-full flex justify-center items-center gap-2 border border-transparent text-lg leading-[22px] font-medium rounded-md text-white hover:bg-black/80 transition duration-150 ease-in-out ${
        isLoading || disable
          ? 'bg-black/80 cursor-not-allowed'
          : 'bg-black cursor-pointer'
      }`}
    >
      {children}

      {isLoading && (
        <div
          class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-blue-600 motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
    </button>
  );
}

export default BlackWhiteSubmitButtonWithHFull;
