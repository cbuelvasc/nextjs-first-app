'use client';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

export const BreadcrumbsComponent = () => {
  const pathName = usePathname();
  return (
    <div className='flex flex-col flex-wrap gap-4 mt-5 ml-5'>
      <Breadcrumbs variant='solid'>
        <BreadcrumbItem>{pathName.replace('/', '> ')}</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};
