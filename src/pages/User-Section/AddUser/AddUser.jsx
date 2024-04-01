import AddUserForm from '../../../components/reuseable/Forms/AddUserForm/AddUserForm';
import Navbar from '../../../components/reuseable/Navbar/Navbar';
import SideBarContainer from '../../../components/reuseable/SideBar/SideBarContainer';

function AddUser() {
  return (
    <div>
      <SideBarContainer>
        <Navbar />
        <div className="container">
          <div className="mt-8">
            <div className="light-card">
              <div className="flex justify-between items-center gap-5 mb-3">
                <div className="section-title">Add User</div>
              </div>

              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div>
                      <AddUserForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBarContainer>
    </div>
  );
}

export default AddUser;
