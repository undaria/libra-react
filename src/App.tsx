import React from 'react';
import './App.css';
import { MystudyHistory } from './features/mystudy/routes/MystudyHistory';
import { MyProfile } from './features/myprofile/myprofile';
import NotFound from './features/notFound/notFound';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Cbt } from './features/cbt/Cbt';
import { RecoilRoot } from 'recoil';
import { UpdateList } from './features/update/routes/UpdateList';
import { AuthRoutes } from './features/auth/routes';
import { AuthProvider } from '@/lib/auth';
import { Profile } from './features/users/routes/Profile';
//import { queryClient } from '@/lib/react-query';
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {
  
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <BrowserRouter basename="/libra-react">
    <Routes >
        <Route path="/" element={<Layout />}>
        <Route index element={<MystudyHistory />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="study" element={<MystudyHistory />} />
        <Route path="update" element={<UpdateList />} />
        <Route path="cbt" element={<Cbt />} />
        <Route path="auth/*" element={<AuthRoutes />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    </QueryClientProvider>
    </RecoilRoot>

  )
}

export default App;
