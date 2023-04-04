import React from 'react';
import SearchInput from './common/SearchInput';
import SortMeetup from './common/SortMeetup';
import SortByLocation from './common/SortByLocation';

const RightNavigation = () => {
  return (
    <div className="w-2/4 sm:px-6">
      <SearchInput />
      <SortMeetup />
      <SortByLocation />
    </div>
  );
};

export default RightNavigation;
