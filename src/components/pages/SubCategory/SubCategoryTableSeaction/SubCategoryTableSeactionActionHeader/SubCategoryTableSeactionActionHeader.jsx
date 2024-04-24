import { useState } from 'react';
import exportExcel from '../../../../../utils/ExcelGenerator/ExcelGenerator';
import exportPdf from '../../../../../utils/PdfGenerator/PdfGenerator';
import TopActionHeader1 from '../../../../reuseable/Table/TopActionHeaders/TopActionHeader1/TopActionHeader1';

function SubCategoryTableSeactionActionHeader(props) {
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
    data,
  } = props;

  const leftSideActionOptions = {
    pdf: true,
    excel: true,
    print: true,
  };

  const handlePdf = () => {
    // console.log('data = ', data);
    let head = [['Category ID', 'Category Name', 'Location']];

    let fieldToShow = ['id', 'category', 'location']; // data column kyes
    exportPdf('Category List', head, data, fieldToShow);
  };
  const handleExcel = () => {
    // console.log("inside handleExcell");
    // console.log("data = ", data);

    const exportData = [];

    data.map((item) => {
      let obj = {};
      obj['id'] = item.id;
      obj['Category'] = item.category;
      obj['Location'] = item.location;

      exportData.push(obj);
    });

    exportExcel(exportData, 'Category_List.xlsx');
  };

  const handlePrint = () => {
    console.log('inside handlePrint');
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
        handlePdf={handlePdf}
        handleExcel={handleExcel}
        handlePrint={handlePrint}
      />
    </div>
  );
}

export default SubCategoryTableSeactionActionHeader;
