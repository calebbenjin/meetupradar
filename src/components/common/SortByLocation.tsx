import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const locations = [
  {
    id: 1,
    title: `Lagos`,
  },
  {
    id: 2,
    title: `Port Harcourt`,
  },
  {
    id: 3,
    title: `Abuja`,
  },
  {
    id: 4,
    title: `Ibadan`,
  },
  {
    id: 5,
    title: `Calabar`,
  },
];

const SortByLocation = () => {
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-xl text-sky-600 mb-6 mb-3">
        Sort By Location
      </h2>

      {locations.map((location) => (
        <div
          key={location.id}
          className="flex items-center cursor-pointer hover:text-sky-600 mb-4 justify-between"
        >
          <p>{location.title}</p>
          <BsThreeDots className="text-gray-400" />
        </div>
      ))}
    </div>
  );
};

export default SortByLocation;
