"use client"
import BackButton from '@/app/components/admin/BackButton'

import ToggleTheme from '@/app/components/providers/ToggleTheme'
import { useTheme } from 'next-themes'
import React from 'react'

function SettingsPage() {
    const {theme}=useTheme();
    const isDarkMode= theme === "dark";
  return (
    <div >
        <BackButton text='Go Back' link='/admin'/>
        <h1 className='text-2xl md:text-3xl'>
            Settings
            </h1>
            <h2 className="mt-8 ">
        {isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}
      </h2>
            <ToggleTheme/>
            </div>
  )
}

export default SettingsPage