import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});

  const handleClick = (event) => {
    event.preventDefault();
    let formErrors = {};

    if (!fullName) formErrors.fullName = 'Full Name is required';
    if (!email) formErrors.email = 'Email is required';
    if (!password) formErrors.password = 'Password is required';
    if (!age || isNaN(age)) formErrors.age = 'Valid age is required';
    if (!gender) formErrors.gender = 'Gender is required';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setLoader(true);

    console.log('Form data', { fullName, email, password, age, gender });

    setTimeout(() => {
      setLoader(false);
    }, 3500);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-4" onSubmit={handleClick}>
        <div className="flex flex-col">
          <label>Full Name</label>
          <input
            className="border border-gray-300 rounded px-2 focus-visible:outline-none"
            placeholder="Type full name.."
            id="name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
        </div>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            className="border border-gray-300 rounded px-2 focus-visible:outline-none"
            placeholder="Type your email.."
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            className="border border-gray-300 rounded px-2 focus-visible:outline-none"
            placeholder="Type your password.."
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && <span className="text-red-500">{errors.password}</span>}
        </div>
        <div className="flex flex-col">
          <label>Age</label>
          <input
            className="border border-gray-300 rounded px-2 focus-visible:outline-none"
            placeholder="Type your age.."
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          {errors.age && <span className="text-red-500">{errors.age}</span>}
        </div>
        <div className="flex flex-col">
          <label>Gender</label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={(event) => setGender(event.target.value)}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(event) => setGender(event.target.value)}
            />
            <label htmlFor="female">Female</label>
          </div>
          {errors.gender && <span className="text-red-500">{errors.gender}</span>}
        </div>
        <button
          className="border border-blue-500 gap-2 rounded px-3 py-2 flex items-center justify-center"
          type="submit"
        >
          {loader ? <Loader2 className="animate-spin text-blue-500" /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Form;
