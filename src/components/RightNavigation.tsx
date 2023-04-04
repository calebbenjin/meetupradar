import React from 'react';
import SearchInput from './common/SearchInput';
import SortMeetup from './common/SortMeetup';
import SortByLocation from './common/SortByLocation';

const RightNavigation = () => {
  return (
    <div className="w-2/4 relative">
      <div className="fixed h-screen sm:px-6  border-solid border-l border-gray-300">
        <SearchInput />
        <SortMeetup />
        <SortByLocation />
      </div>
    </div>
  );
};

export default RightNavigation;
