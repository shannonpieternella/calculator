'use client'; 
import React from 'react';
import Result from '@/pages/Result'
import { Vraagone } from '@/components/Formone'
//import { Vraagtwo } from '@/pages/Vraagtwo'
import Image from 'next/image'
import { GlobalStateProvider } from '../contexts/GlobalStateContext';

const Layout = ({ children }) => {
  return (
    <GlobalStateProvider>
      {children}
    </GlobalStateProvider>
  );
};

export default Layout;
