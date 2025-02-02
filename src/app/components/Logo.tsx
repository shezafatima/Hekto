import { cn } from '@/lib/utils';
import React from 'react'
interface Props {
  children:React.ReactNode;
  className?:string

} 
function Logo({children,className}:Props) {
    return (
    
      <h1 className={cn('text-[34px] text-[#0D0E43] font-semibold',className)}>
        {children}</h1>
    )
  }
  
  export default Logo