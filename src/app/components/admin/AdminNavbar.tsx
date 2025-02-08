import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Avatar, AvatarImage ,AvatarFallback} from '@/components/ui/avatar'
import ThemeToggler from '../providers/ThemeToggler'

function AdminNavbar() {
  return (
    <div className='bg-primary sticky top-0 z-50 dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>

       
        <Logo className='text-white'>
            Hekto
            </Logo>
      
          <div className="flex items-center">
            <ThemeToggler/>
            <DropdownMenu>
  <DropdownMenuTrigger className='focus:outline-none'>
  <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn'/>
               
            
            <AvatarFallback className='text-black '>
                user
            </AvatarFallback>
            </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Link href={"/admin/profile"}>
      Profile
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href={"/auth"}>
    Logout
      </Link>
    </DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>
          </div>

    </div>
  )
}

export default AdminNavbar