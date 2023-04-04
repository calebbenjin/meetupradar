import React from 'react';

interface NewsFeedProps {
  children: React.ReactElement;
}

const NewFeeds = ({ children }: NewsFeedProps) => {
  return (
    <div className="w-full">
      <header className="py-6 px-4">
        <h1 className="font-bold text-sky-700 text-2xl">Meetups</h1>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default NewFeeds;
