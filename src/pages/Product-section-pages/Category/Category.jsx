import React from 'react';
import SideBarContainer from '../../../components/reuseable/SideBar/SideBarContainer';
import Navbar from '../../../components/reuseable/Navbar/Navbar';
import AddCategoryForm from '../../../components/pages/AddCategoryForm/AddCategoryForm';

function Category() {
  return (
    <div>
      <SideBarContainer>
        <Navbar />
        <div className="container">
          <div className="mt-10 text-xl font-bold">Category List</div>
          <div className="mt-5">
            <div className="grid lg:grid-cols-6 gap-[30px]">
              <div className="lg:col-span-4">Category</div>
              <div className="lg:col-span-2">
                <AddCategoryForm />
              </div>
            </div>
          </div>
        </div>
      </SideBarContainer>
    </div>
  );
}

export default Category;
