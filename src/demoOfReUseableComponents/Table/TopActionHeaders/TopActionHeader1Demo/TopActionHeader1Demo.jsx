import { useState } from "react";
import TopActionHeader1 from "../../../../components/reuseable/Table/TopActionHeaders/TopActionHeader1/TopActionHeader1";

function TopActionHeader1Demo(props) {
  const [searchboxStatus, setSearchboxStatus] = useState(false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const {
    fromDate,
    setFromDate,
    toDate,
    setToDate,
    handleFilter,
    searchText,
    setSearchText,
  } = props;

  const leftSideActionOptions = {
    pdf: false,
    excel: false,
    print: false,
  };

  return (
    <div>
      <TopActionHeader1
        searchboxStatus={searchboxStatus}
        setSearchboxStatus={setSearchboxStatus}
        searchText={searchText}
        setSearchText={setSearchText}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        leftSideActionOptions={leftSideActionOptions}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default TopActionHeader1Demo;
