import React from 'react';
import logo from './logo.svg';
import './App.css';

import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';
//import "./style/styles.css";

import { MystudyHistory } from './features/mystudy/routes/MystudyHistory';
import Profile from './features/profile/profile';
import NotFound from './features/notFound/notFound';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Cbt } from './features/cbt/Cbt';
import { RecoilRoot } from 'recoil';
import { UpdateList } from './features/update/routes/UpdateList';

function App() {
  return (  
    <RecoilRoot>
    <BrowserRouter basename="/libra-react">
    <Routes >
        <Route path="/" element={<Layout />}>
        <Route index element={<UpdateList />} />
        <Route path="profile" element={<Profile />} />
        <Route path="study" element={<MystudyHistory />} />
        <Route path="cbt" element={<Cbt />} />
        <Route path="/*" element={<NotFound />} />
        </Route>
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
   
  )
}

export default App;
