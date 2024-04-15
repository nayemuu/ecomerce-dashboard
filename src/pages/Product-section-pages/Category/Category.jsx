import Navbar from "../../../components/reuseable/Navbar/Navbar";
import SideBarContainer from "../../../components/reuseable/SideBar/SideBarContainer";
import CategoryTableSeaction from "../../../components/pages/Category/CategoryTableSeaction/CategoryTableSeaction";

function Category() {
  return (
    <div>
      <SideBarContainer>
        <Navbar />
        <CategoryTableSeaction />
      </SideBarContainer>
    </div>
  );
}

export default Category;
