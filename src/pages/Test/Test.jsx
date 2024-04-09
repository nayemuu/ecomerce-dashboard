import React from 'react';
import Navbar from '../../components/reuseable/Navbar/Navbar';
import SideBarContainer from '../../components/reuseable/SideBar/SideBarContainer';
import Table1Demo from '../../demoOfReUseableComponents/Table/Table1/Table1Demo';
import TopActionHeader1Demo from '../../demoOfReUseableComponents/Table/TopActionHeaders/TopActionHeader1Demo/TopActionHeader1Demo';

function Test(props) {
  return (
    <div>
      <SideBarContainer>
        <Navbar />
        <div className="container">
          <div className="mt-10 text-xl font-bold">Category List</div>
          <div className="mt-5">
            <div className="light-card">
              <TopActionHeader1Demo />
              <div className="mt-5">
                <Table1Demo />
              </div>
            </div>
          </div>
        </div>
      </SideBarContainer>
    </div>
  );
}

export default Test;
