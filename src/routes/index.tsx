import { useInRouterContext, useRoutes } from 'react-router-dom';

// import { Landing } from '@/features/misc';
// import { useAuth } from '@/lib/auth';

import { protectedRoutes } from './protected';
//import { publicRoutes } from './public';
import { MystudyHistory } from '@/features/mystudy/routes/MystudyHistory';

export const AppRoutes = () => {
  //const auth = useAuth();

  //const commonRoutes = [{ path: '/', element: <Landing /> }];
  //const routes = auth.user ? protectedRoutes : publicRoutes;

 // const element = useRoutes([...routes, ...commonRoutes]);
  const element = useRoutes(protectedRoutes)

  return <>{element}</>;
};
