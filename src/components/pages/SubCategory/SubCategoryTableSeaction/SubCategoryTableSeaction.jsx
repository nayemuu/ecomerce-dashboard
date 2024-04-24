import { useEffect, useState } from 'react';
import AddSubCategoryForm from './AddSubCategoryForm/AddSubCategoryForm';
import SubCategoryTable from './SubCategoryTable/SubCategoryTable';
import SubCategoryTableSeactionActionHeader from './SubCategoryTableSeactionActionHeader/SubCategoryTableSeactionActionHeader';
let data = [
  { id: 1, category: 'Baby food', location: 'Foodbox', status: 'pending' },
  { id: 2, category: 'Skin Care', location: 'bodycare' },
  { id: 3, category: 'Medicine', location: 'medicare' },
];

function SubCategoryTableSeaction() {
  const [searchText, setSearchText] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  useEffect(() => {
    console.log('searchText = ', searchText);
  }, [searchText]);

  const handleFilter = (e) => {
    e.preventDefault();
    if (!errorToastMessage) console.log('fromDate = ', fromDate);
    console.log('toDate = ', toDate);
  };

  return (
    <div className="container">
      <div className="mt-10 text-xl font-bold">Category List</div>
      <div className="mt-5">
        <div className="light-card">
          <SubCategoryTableSeactionActionHeader
            searchText={searchText}
            setSearchText={setSearchText}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
            handleFilter={handleFilter}
            data={data}
          />

          <div className="flex gap-[40px] flex-col lg:flex-row mt-5">
            <div className="w-full basis-7/12">
              <SubCategoryTable data={data} />
            </div>
            <div className="w-full basis-5/12">
              <AddSubCategoryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubCategoryTableSeaction;
