import { useRef } from 'react';

function SideBarAccordianBody({ activeIndex, index, children, transition }) {
  const ref = useRef(null);

  return (
    <div
      className={`overflow-y-hidden ease-linear ${
        transition ? 'transition-all duration-200' : ''
      }`}
      style={{
        height: activeIndex === index ? ref.current?.offsetHeight || 0 : 0,
      }}
    >
      <div className="px-4" ref={ref}>
        {children}
      </div>
    </div>
  );
}

export default SideBarAccordianBody;
