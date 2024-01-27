'use client';  // pragma to mark the module as client code

import React from 'react';
//import Result from '@/pages/Result'
import Formone from '@/components/Formone'
//import { Vraagtwo } from '@/pages/Vraagtwo'
//import Image from 'next/image'
import { GlobalStateProvider } from '../contexts/GlobalStateContext';

export default function Home() {
  return (
    <GlobalStateProvider>
<Formone />
</GlobalStateProvider>
    )
}
