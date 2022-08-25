import { NavLink, Outlet, Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import {
  UserIcon,
} from '@heroicons/react/outline';
import { Dialog, Menu, Transition } from '@headlessui/react';
import * as React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';

type UserNavigationItem = {
  name: string;
  to: string;
  onClick?: () => void;
};

const UserNavigation = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const userNavigation = [
    { name: 'プロフィール', to: './profile' },
    {
      name: 'ログアウト',
      to: '',
      onClick: async() => {
        await logout();
        navigate('/');
      },
    },
  ].filter(Boolean) as UserNavigationItem[];

  return (
    <Menu as="div" className="ml-3 relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="max-w-xs  bg-gray-200 p-2 flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Open user menu</span>
              <UserIcon className="h-8 w-8 rounded-full" />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      onClick={item.onClick}
                      to={item.to}
                      className={clsx(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};




export const Layout: React.FC = () => {
  const navigation = [
    { name: 'ホーム', to: './'},
    { name: '認知再構成法', to: './cbt'}
    //{ name: 'プロフィ―ル', to: './myprofile'}
    // { name: '勉強一覧', to: './study'},
  ]
  const { user } = useAuth();
    return (<>
       <nav className="bg-indigo-800 text-white flex flex-wrap justify-between">
       <ul className="px-20 py-4 flex space-x-5 ">
       <ReactQueryDevtools />
        {navigation.map((item, index) => (
                <NavLink
                to = {item.to}
                key = {item.name}
                className="cursor-pointer"
                >
                    {item.name}
                </NavLink>
        ))}

       </ul>
       <div className="flex items-center relative">
       {user ? <UserNavigation/> 
       :<NavLink to='./auth/login' key = 'Login' className="absolute  right-0 w-16">Login</NavLink>
       }  
       </div>
     </nav>
     <div className='bg-slate-50'>
        <Outlet />
      </div>
      
    </>
    );
};

export default Layout