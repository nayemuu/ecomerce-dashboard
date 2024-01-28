import React from "react";
import Navbar from "../../components/reuseable/Navbar/Navbar";
import SideBarContainer from "../../components/reuseable/SideBar/SideBarContainer";

function Home() {
  return (
    <div>
      <SideBarContainer>
        <Navbar />
        <div className="container">
          <h1 className="text-3xl font-bold underline text-green-600">
            Hello world!
          </h1>
        </div>
      </SideBarContainer>
    </div>
  );
}

export default Home;
