import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoFilter } from 'react-icons/io5';
import excel from '../../../assets/utils/excel.png';
import pdf from '../../../assets/utils/pdf.png';
import print from '../../../assets/utils/print.png';
import AddCategoryForm from '../../../components/pages/Category/AddCategoryForm/AddCategoryForm';
import CategoryList from '../../../components/pages/Category/CategoryList/CategoryList';
import InputForText from '../../../components/reuseable/Inputs/InputForText/InputForText';
import Navbar from '../../../components/reuseable/Navbar/Navbar';
import SideBarContainer from '../../../components/reuseable/SideBar/SideBarContainer';

function Category() {
  const [searchboxStatus, setSearchboxStatus] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div>
      <SideBarContainer>
        <Navbar />
        <div className="container">
          <div className="mt-10 text-xl font-bold">Category List</div>
          <div className="mt-5">
            <div className="light-card">
              <div>
                <div className="flex justify-between items-center gap-5 mb-3">
                  <div className="flex gap-2">
                    <div>
                      <img src={pdf} className="w-[35px] h-[35px]" />
                    </div>
                    <div>
                      <img src={excel} className="w-[35px] h-[35px]" />
                    </div>
                    <div>
                      <img src={print} className="w-[35px] h-[35px]" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-5">
                    <div className="relative h-[36px] flex items-center">
                      <div className="h-full w-[30px] flex justify-center items-center absolute right-[3px]">
                        <div
                          className="text-xl font-extrabold cursor-pointer hover:text-green-500 duration-300"
                          onClick={() => setSearchboxStatus(!searchboxStatus)}
                        >
                          <CiSearch />
                        </div>
                      </div>

                      <input
                        type="text"
                        placeholder="Search..."
                        className={`rounded-full outline-none focus:border-green-500 ${
                          searchboxStatus
                            ? 'w-[300px] h-full pl-5 pr-[35px] border border-[#AAB8C2] duration-300'
                            : 'w-[0px] h-[0px] pl-0 border-0 invisible relative right-2'
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
                  <div className="flex justify-end my-4">
                    <div className="flex gap-6">
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
                    </div>
                  </div>
                )}

                <div>
                  <div className="w-full h-[1px] bg-slate-400"></div>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-[40px] mt-5">
                <div className="lg:col-span-7">
                  <CategoryList />
                </div>
                <div className="lg:col-span-5">
                  <AddCategoryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBarContainer>
    </div>
  );
}

export default Category;
