'use client';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import _ from 'lodash';
import { FcHome } from 'react-icons/fc';

export const BreadcrumbsComponent = () => {
  const pathName = usePathname();
  return (
    <div className='flex flex-col flex-wrap gap-4 mt-5 ml-5'>
      <Breadcrumbs variant='bordered'>
        <BreadcrumbItem href='/' startContent={<FcHome />}>Home</BreadcrumbItem>
        <BreadcrumbItem>{_.capitalize(pathName.replace('/', ''))}</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};