/* eslint-disable @typescript-eslint/no-use-before-define */
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type NavProps = {
  href: string;
  text: string;
  icon: any;
};

function NavItem({ href, icon, text }: NavProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <div
      className={
        isActive
          ? `flex items-center mb-6 p-2 rounded-md shadow-md`
          : `flex items-center mb-6 cursor-pointer p-3 rounded hover:shadow-md`
      }
    >
      <>{icon}</>
      <NextLink
        href={href}
        className={
          isActive ? `font-bold text-xl text-sky-600` : `text-xl text-gray-600`
        }
      >
        <span className="capsize md:text-1xl">{text}</span>
      </NextLink>
    </div>
  );
}

export default NavItem;
