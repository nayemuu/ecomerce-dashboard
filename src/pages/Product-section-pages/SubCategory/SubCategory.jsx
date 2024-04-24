import SubCategoryTableSeaction from '../../../components/pages/SubCategory/SubCategoryTableSeaction/SubCategoryTableSeaction';
import Navbar from '../../../components/reuseable/Navbar/Navbar';
import SideBarContainer from '../../../components/reuseable/SideBar/SideBarContainer';

function SubCategory() {
  return (
    <div>
      <SideBarContainer>
        <Navbar />
        <SubCategoryTableSeaction />
      </SideBarContainer>
    </div>
  );
}

export default SubCategory;
