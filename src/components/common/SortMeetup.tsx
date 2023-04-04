import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const meetups = [
  {
    id: 1,
    title: `Web3 Meetups`,
  },
  {
    id: 2,
    title: `AI Meetups`,
  },
  {
    id: 3,
    title: `Data Analytics Meetups`,
  },
  {
    id: 4,
    title: `UIUX Meetups`,
  },
  {
    id: 5,
    title: `Mobile Development Meetups`,
  },
  {
    id: 6,
    title: `Web Development`,
  },
];

const SortMeetup = () => {
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-xl text-sky-600 mb-6 mb-3">
        Sort Meetup
      </h2>

      {meetups.map((meetup) => (
        <div
          key={meetup.id}
          className="flex items-center cursor-pointer hover:text-sky-600 mb-4 justify-between"
        >
          <p>{meetup.title}</p>
          <BsThreeDots className="text-gray-400" />
        </div>
      ))}
    </div>
  );
};

export default SortMeetup;
