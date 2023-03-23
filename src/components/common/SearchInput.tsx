import React from 'react';
import FormInput from './FormInput';
import { CiSearch } from 'react-icons/ci';

const SearchInput = () => {
  return (
    <div className="relative flex items-center mt-6 mb-10">
      <CiSearch className="absolute text-xl top-4 left-2" />
      <input
        name="search"
        placeholder="Search meetups"
        className="appearance-none rounded-lg block w-full sm:pl-8 px-3 py-3 sm:py-3 border border-gray-300 placeholder-gray-500 sm:mt-1 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 placeholder:text-md sm:text-md sm:leading-5"
      />
    </div>
  );
};

export default SearchInput;
