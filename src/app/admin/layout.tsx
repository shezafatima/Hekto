import React from 'react'

import "../globals.css";


import {Josefin_Sans} from "next/font/google"
import { ThemeProvider } from '../components/providers/ThemeProvider';
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminSidebar from '../components/admin/AdminSidebar';
import { Toaster } from 'react-hot-toast';

const josefinSans = Josefin_Sans({subsets :['latin'],
  weight:['100','300','400']
})


function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang='en'>
        <body className={` ${josefinSans.className} antialiased`}>
          <ThemeProvider attribute='class' defaultTheme='light' enableSystem={true} storageKey='dashboard-theme'>

      <AdminNavbar/>
      <div className='flex'>
<div className='hidden md:block h-[100vh] w-[300px]'>
<AdminSidebar/>
</div>
<div className='p-5 w-full md:max-w-[1140px]'>

            {children}
</div>
      </div>
          </ThemeProvider>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#000000",
                color: "#ffffff",
              },
            }}
          />
        </body>
    </html>
  )
}

export default RootLayout