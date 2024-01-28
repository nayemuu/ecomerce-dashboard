import React from 'react';
import SideBarContainer from '../../components/reuseable/SideBar/SideBarContainer';
import Navbar from '../../components/reuseable/Navbar/Navbar';

function Category() {
  return (
    <div>
      <SideBarContainer>
        <Navbar />
        <div className="container">
          <h1 className="text-3xl font-bold underline text-green-600">
            Category
          </h1>
        </div>
      </SideBarContainer>
    </div>
  );
}

export default Category;
