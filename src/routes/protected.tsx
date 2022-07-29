//import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from '@/components/Layout/MainLayout'
//import { lazyImport } from '@/utils/lazyImport';

// const { MystudyHistory } = lazyImport(() => import('@/features/mystudy/routes/MystudyHistory'), 'MystudyHistory');
// const { Profile } = lazyImport(() => import('@/features/profile/profile'), 'Profile');

//import { MystudyHistory } from '@/features/mystudy/routes/MystudyHistory';
import { Profile } from '@/features/profile/profile'
import NotFound from '@/features/notFound/notFound';
const App = () => {
  return (
    <MainLayout>
        <Outlet />
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
        { path: '/profile', element: <Profile /> },
        //{ path: '/', element: <MystudyHistory /> },
        { path: '/*', element: <NotFound /> },
    ],
  },
];