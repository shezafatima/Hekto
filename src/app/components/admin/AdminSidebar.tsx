import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { Boxes, LayoutDashboard, MessageSquareText, Package, Settings, User } from "lucide-react"
  import Link from 'next/link'
import React from 'react'

function AdminSidebar() {
  return (
   
        <Command className="bg-secondary rounded-none ">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem><LayoutDashboard className="mr-2 h-4 w-4"/>
      <Link href='/admin'>
      
      Dashboard
      </Link>
      
      </CommandItem>
      <CommandItem><Package className="mr-2 h-4 w-4"/>
      <Link href='/admin/orders'>
      
     Orders
      </Link>
      
      </CommandItem>
      <CommandItem><MessageSquareText className="mr-2 h-4 w-4"/>
      <Link href='/admin/reviews'>
      
      Reviews
      </Link>
      
      </CommandItem>
      <CommandItem><Boxes className="mr-2 h-4 w-4"/>
      <Link href='/admin/product'>
      
     Products
      </Link>
      
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
      <User className="mr-2 h-4 w-4"/>
      <span>
        Profile

      </span>
      <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
      <Settings className="mr-2 h-4 w-4"/>
      <span>
      Settings

      </span>
      <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

  
  )
}

export default AdminSidebar
