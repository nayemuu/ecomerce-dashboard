import { CiSearch } from 'react-icons/ci';
import { IoFilter } from 'react-icons/io5';
import excel from '../../../../../assets/utils/excel.png';
import pdf from '../../../../../assets/utils/pdf.png';
import print from '../../../../../assets/utils/print.png';
import BlackWhiteSubmitButtonWithHFull from '../../../Buttons/Submit-Buttons/BlackWhiteSubmitButtonWithHFull/BlackWhiteSubmitButtonWithHFull';
import InputForText from '../../../Inputs/InputForText/InputForText';
import './TopActionHeader1.css';

function TopActionHeader1(props) {
  const {
    searchboxStatus,
    setSearchboxStatus,
    searchText,
    setSearchText,
    fromDate,
    setFromDate,
    toDate,
    setToDate,
    isFilterOpen,
    setIsFilterOpen,
    leftSideActionOptions,
    handleFilter,
    handlePdf,
    handleExcel,
    handlePrint,
  } = props;

  return (
    <div>
      <div className="flex justify-between items-center gap-5 flex-wrap mb-3">
        <div className="flex gap-2 shrink-0">
          {leftSideActionOptions.pdf && (
            <div onClick={handlePdf} className="cursor-pointer">
              <img src={pdf} className="w-[35px] h-[35px] aspect-square" />
            </div>
          )}

          <div onClick={handleExcel} className="cursor-pointer">
            <img src={excel} className="w-[35px] h-[35px] aspect-square" />
          </div>

          <div onClick={handlePrint} className="cursor-pointer">
            <img src={print} className="w-[35px] h-[35px aspect-square" />
          </div>
        </div>

        <div className="flex justify-between items-center gap-5 grow">
          <div className="relative h-[36px] w-full flex justify-end items-center">
            <div className="h-full w-[30px] flex justify-center items-center absolute right-[3px]">
              <div
                className="text-xl font-extrabold cursor-pointer hover:text-green-500 duration-300"
                onClick={() => setSearchboxStatus(!searchboxStatus)}
              >
                <CiSearch />
              </div>
            </div>

            <input
              type="search"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className={`rounded-full outline-none focus:border-green-500 table-searchbar ${
                searchboxStatus
                  ? 'max-w-[400px] w-full h-full pl-5 pr-[35px] border border-[#AAB8C2] duration-300'
                  : 'max-w-[0px] h-[0px] pl-0 border-0 invisible relative right-2'
              }`}
            />
          </div>

          <div
            className="text-lg font-bold cursor-pointer hover:text-green-500"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <IoFilter />
          </div>
        </div>
      </div>

      {isFilterOpen && (
        <div className="flex flex-wrap justify-end my-4">
          <form className="flex flex-wrap gap-6" onSubmit={handleFilter}>
            <div className="w-[160px]">
              <InputForText
                inputType="date"
                label="From Date"
                value={fromDate}
                setValue={setFromDate}
                mandatory={true}
              />
            </div>

            <div className="w-[160px]">
              <InputForText
                inputType="date"
                label="To Date"
                value={toDate}
                setValue={setToDate}
                mandatory={true}
              />
            </div>

            <div className="w-[120px] h-[43px]">
              <BlackWhiteSubmitButtonWithHFull
                isLoading={false}
                disable={false}
              >
                filter
              </BlackWhiteSubmitButtonWithHFull>
            </div>
          </form>
        </div>
      )}

      <div>
        <div className="w-full h-[1px] bg-slate-400"></div>
      </div>
    </div>
  );
}

export default TopActionHeader1;
