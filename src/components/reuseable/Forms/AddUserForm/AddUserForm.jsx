import { useState } from 'react';
import CancelButton from '../../Buttons/CancelButton/CancelButton';
import BlackWhiteSubmitButton from '../../Buttons/Submit-Buttons/BlackWhiteSubmitButton/BlackWhiteSubmitButton';
import DropdownInput from '../../Inputs/DropdownInput/DropdownInput';
import InputForText from '../../Inputs/InputForText/InputForText';
let roles = ['superUser', 'admin', 'modarator'];

function AddUserForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [role, setRole] = useState('');

  return (
    <div className="flex flex-col gap-6 p-5 bg-[#f3f6fa] rounded-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputForText
          inputType="text"
          label="User Name"
          value={name}
          setValue={setName}
          mandatory={true}
        />

        <InputForText
          inputType="text"
          label="Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          mandatory={true}
        />
        <InputForText
          inputType="text"
          label="Email"
          value={email}
          setValue={setEmail}
          mandatory={true}
        />

        <InputForText
          inputType="text"
          label="Designation"
          value={designation}
          setValue={setDesignation}
          mandatory={true}
        />

        <DropdownInput
          inputType="text"
          label="Role"
          value={role}
          setValue={setRole}
          mandatory={true}
          options={roles}
        />
      </div>

      <div className="flex gap-5 flex-wrap">
        <div className="max-w-60 w-full">
          <BlackWhiteSubmitButton isLoading={false} disable={false}>
            Submit
          </BlackWhiteSubmitButton>
        </div>
        <div className="max-w-60 w-full">
          <CancelButton isLoading={false} disable={false}>
            Cancel
          </CancelButton>
        </div>
      </div>
    </div>
  );
}

export default AddUserForm;
