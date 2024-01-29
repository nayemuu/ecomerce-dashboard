import { useState } from 'react';

function AddCategoryForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('email = ', email);
    console.log('password = ', password);

    //resetForm();
    setFormValidation('');
  };

  return (
    <div className="bg-white p-5 border border-solid border-[#dce0e4] rounded-md">
      <div className="text-xl font-bold ml-1 cursor-pointer text-center">
        Add Products Category
      </div>

      <form onSubmit={submitHandler}>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Category Name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              placeholder="user@example.com"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        <div className="mt-4">
          <span className="block w-full rounded-md shadow-sm">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black/80 transition duration-150 ease-in-out"
            >
              Create Category
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default AddCategoryForm;
