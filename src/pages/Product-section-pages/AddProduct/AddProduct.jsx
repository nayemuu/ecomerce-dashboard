import Navbar from '../../../components/reuseable/Navbar/Navbar';
import SideBarContainer from '../../../components/reuseable/SideBar/SideBarContainer';

function AddProduct() {
  return (
    <div>
      <SideBarContainer>
        <Navbar />
        <div className="container">
          <h1 className="text-3xl font-bold underline text-green-600">
            AddProduct
          </h1>
        </div>
      </SideBarContainer>
    </div>
  );
}

export default AddProduct;
