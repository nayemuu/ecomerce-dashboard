import { useState } from 'react';
import BlackWhiteSubmitButton from '../../../../reuseable/Buttons/Submit-Buttons/BlackWhiteSubmitButton/BlackWhiteSubmitButton';
import DropdownInput from '../../../../reuseable/Inputs/DropdownInput/DropdownInput';
import InputForText from '../../../../reuseable/Inputs/InputForText/InputForText';

let locations = ['Medicines', 'Food Box', 'Body Care', 'Private Box'];

function AddCategoryForm() {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const resetForm = () => {
    setCategory('');
    setLocation('');
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('category = ', category);
    console.log('location = ', location);

    //resetForm();
    setFormValidation('');
  };

  return (
    <div className="p-6 bg-[#f3f6fa] rounded-sm">
      <div className="section-title">Add Products Category</div>

      <div className="mt-5">
        <form onSubmit={submitHandler}>
          <div className="grid gap-5">
            <InputForText
              inputType="text"
              label="Category"
              value={category}
              setValue={setCategory}
              mandatory={true}
              labelBackgroundColor="#f3f6fa"
            />

            <DropdownInput
              inputType="text"
              label="Location"
              value={location}
              setValue={setLocation}
              mandatory={true}
              options={locations}
              labelBackgroundColor="#f3f6fa"
            />
          </div>

          <div className="mt-5">
            <div className="flex gap-5 flex-wrap">
              <div className="max-w-[200px] w-full">
                <BlackWhiteSubmitButton isLoading={false} disable={false}>
                  Create Category
                </BlackWhiteSubmitButton>
              </div>
              {/* <div className="max-w-[200px] w-full">
              <CancelButton isLoading={false} disable={false}>
                Cancel
              </CancelButton>
            </div> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCategoryForm;
