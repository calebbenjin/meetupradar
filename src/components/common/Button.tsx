import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

interface ButtonTypes {
  children: React.ReactNode | React.ReactElement;
  onClick?: (e: any) => void;
  className?: any;
  href?: any;
  loading?: boolean;
  loadingText?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  onClick,
  className,
  loading,
  type,
  loadingText,
}: ButtonTypes) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {loading ? (
        <span className="flex items-center justify-center">
          <FontAwesomeIcon icon={faCircleNotch} spin />
          <span className="ml-2">{loadingText}</span>
        </span>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

const LinkButton = ({ children, onClick, className, href }: ButtonTypes) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    </motion.button>
  );
};

export { Button, LinkButton };
