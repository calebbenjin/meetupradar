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
    <div className="flex items-center mb-2 cursor-pointer p-3 rounded hover:shadow-md">
      <>{icon}</>
      <NextLink
        href={href}
        className={
          isActive ? `font-bold text-lg text-sky-600` : `text-lg text-gray-600`
        }
      >
        <span className="capsize sm:text-lg">{text}</span>
      </NextLink>
    </div>
  );
}

export default NavItem;
