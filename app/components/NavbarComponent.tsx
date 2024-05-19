'use client';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

export const NavbarComponent = () => {
  return (
    <Navbar isBordered>
      <NavbarContent justify='start'>
        <NavbarBrand className='mr-4'>
          {/* <AcmeLogo /> */}
          <p className='hidden font-bold text-inherit sm:block'>ACME</p>
        </NavbarBrand>
        <NavbarContent className='hidden gap-3 sm:flex'>
          <NavbarItem>
            <Link color='foreground' href='about'>
              About
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href='pricing' aria-current='page' color='primary'>
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='contact' color='foreground'>
              Contact
            </Link>
          </NavbarItem>
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
          startContent='search'
          type='search'
        />
        <Dropdown placement='bottom-end'>
          <DropdownTrigger>
            <Avatar
              isBordered
              as='button'
              className='transition-transform'
              color='secondary'
              name='Jason Hughes'
              size='sm'
              src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
            />
          </DropdownTrigger>
          <DropdownMenu aria-label='Profile Actions' variant='flat'>
            <DropdownItem className="text-foreground h-14 gap-2" key='profile'>
              <p className='font-semibold'>Signed in as</p>
              <p className='font-semibold'>zoey@example.com</p>
            </DropdownItem>
            <DropdownItem className="text-foreground" key='settings'>My Settings</DropdownItem>
            <DropdownItem className="text-foreground" key='team_settings'>Team Settings</DropdownItem>
            <DropdownItem className="text-foreground" key='analytics'>Analytics</DropdownItem>
            <DropdownItem className="text-foreground" key='system'>System</DropdownItem>
            <DropdownItem className="text-foreground" key='configurations'>Configurations</DropdownItem>
            <DropdownItem className="text-foreground" key='help_and_feedback'>Help & Feedback</DropdownItem>
            <DropdownItem className="text-foreground" key='logout' color='danger'>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
