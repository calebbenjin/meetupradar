import React from 'react';

interface NewsFeedProps {
  children: React.ReactElement;
}

const NewFeeds = ({ children }: NewsFeedProps) => {
  return (
    <div className="w-full border-solid border-x border-gray-300">
      <header className="border-solid border-y py-6 px-4 border-gray-300">
        <h1 className="font-bold text-sky-700 text-2xl">Meetups</h1>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default NewFeeds;
