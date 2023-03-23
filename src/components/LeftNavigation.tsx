import React from 'react';
import Logo from './common/Logo';
import NavItem from './common/NavItem';
import { Button } from './common/Button';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { IoNotificationsOutline, IoBookmarkOutline } from 'react-icons/io5';

const LeftNavigation = () => {
  return (
    <div className="w-2/4 sm:px-6 h-screen overflow-hidden">
      <Logo />
      <nav className="grid leading-10 mt-10">
        <NavItem
          href="/account"
          text="Home"
          icon={<AiOutlineHome className="h-6 w-6 mr-2 text-gray-600" />}
        />
        <NavItem
          href="/account/notification"
          icon={
            <IoNotificationsOutline className="h-6 w-6 mr-2 text-gray-600" />
          }
          text="Notification"
        />
        <NavItem
          href="/account/bookmark"
          icon={<IoBookmarkOutline className="h-6 w-6 mr-2 text-gray-600" />}
          text="Bookmark"
        />
        <NavItem
          href="/account/settings"
          icon={<FaRegUser className="h-6 w-6 mr-2 text-gray-600" />}
          text="Profile Settings"
        />
        <NavItem
          href="/signin"
          icon={<AiOutlineHome className="h-6 w-6 mr-2 text-gray-600" />}
          text="Sign in"
        />
        <Button
          loading={false}
          loadingText="Loading..."
          className="w-full sm:my-4 my-1 py-1 rounded-md text-gray-100 font-semibold bg-sky-700"
        >
          Upload your meetup
        </Button>
      </nav>
    </div>
  );
};

export default LeftNavigation;
