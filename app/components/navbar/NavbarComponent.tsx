'use client';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import { FcEngineering, FcSearch, FcBusinessman } from "react-icons/fc";

import { ActiveLinkComponent } from '../';

interface NavbarProps {
  navItems: { path: string; label: string }[];
}

export const NavbarComponent = ({ navItems }: NavbarProps) => {
  return (
    <Navbar isBordered className='shadow-md'>
      <NavbarContent justify='start'>
        <NavbarBrand className='mr-4'>
          <FcEngineering className='mr-2 size-10'/>
          <p className='hidden font-bold text-inherit sm:block'>
            <Link color='foreground' href='/'>
              App
            </Link>
          </p>
        </NavbarBrand>
        <NavbarContent className='hidden gap-3 sm:flex'>
          {navItems.map((item) => (
            <NavbarItem key={item.path}>
              <ActiveLinkComponent
                key={item.path}
                path={item.path}
                label={item.label}
              />
            </NavbarItem>
          ))}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as='div' className='items-center' justify='end'>
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder='Type to search...'
          size='sm'
          startContent={<FcSearch />}
          type='search'
        />
        <Dropdown placement='bottom-end'>
          <DropdownTrigger>
            <Avatar
              isBordered
              as='button'
              className='transition-transform bg-gradient-to-br from-[#FFB457] to-[#FF705B]'
              color='secondary'
              name='Jason Hughes'
              size='md'
              fallback={<FcBusinessman className='size-10'/>}
              //src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
            />
          </DropdownTrigger>
          <DropdownMenu aria-label='Profile Actions' variant='flat'>
            <DropdownItem className='h-14 gap-2 text-foreground' key='profile'>
              <p className='font-semibold'>Signed in as</p>
              <p className='font-semibold'>zoey@example.com</p>
            </DropdownItem>
            <DropdownItem className='text-foreground' key='settings'>
              My Settings
            </DropdownItem>
            <DropdownItem className='text-foreground' key='team_settings'>
              Team Settings
            </DropdownItem>
            <DropdownItem className='text-foreground' key='analytics'>
              Analytics
            </DropdownItem>
            <DropdownItem className='text-foreground' key='system'>
              System
            </DropdownItem>
            <DropdownItem className='text-foreground' key='configurations'>
              Configurations
            </DropdownItem>
            <DropdownItem className='text-foreground' key='help_and_feedback'>
              Help & Feedback
            </DropdownItem>
            <DropdownItem
              className='text-foreground'
              key='logout'
              color='danger'
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
