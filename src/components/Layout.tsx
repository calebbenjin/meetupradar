import React from 'react';
import RightNavigation from './RightNavigation';
import LeftNavigation from './LeftNavigation';
import NewFeeds from './NewFeeds';

interface LayoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container h-screen mx-auto w-full sm:w-9/12 flex">
      <LeftNavigation />
      <NewFeeds>{children}</NewFeeds>
      <RightNavigation />
    </div>
  );
};

export default Layout;
