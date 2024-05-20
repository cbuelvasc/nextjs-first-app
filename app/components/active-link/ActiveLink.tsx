'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import style from './ActiveLink.module.css';

interface ActiveLinkProps {
  path: string;
  label: string;
}

export const ActiveLink = ({ path, label }: ActiveLinkProps) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${style.activeLink} ${pathName === path && style['active-link']}`}
      color='foreground'
      href={path}
    >
      {label}
    </Link>
  );
};
