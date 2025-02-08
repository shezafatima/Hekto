// "use client";
// import * as z from "zod"
// import { FormProvider, useForm} from "react-hook-form"
// import {zodResolver} from "@hookform/resolvers/zod"
// import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
// import { Input } from "@/components/ui/input";

// import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "@/components/ui/card";
// import { useRouter } from "next/navigation";

// import { Button } from "@/components/ui/button";

// const formSchema = z.object({
//    email:z.string().min(1,{
//         message:'Email is required'
//     }).email({
//         message:'Please enter a valid email '
//     }),
//     password:z.string().min(1,{
//         message:'Password is required'
//     }),
   
// })

// function LoginForm() {
//     const router = useRouter()
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver:zodResolver(formSchema),
//         defaultValues:{
//            email:'',
//           password:'',
           
            
//         }
//     })
//     const handleSubmit = ()=>{
//         router.push('/admin')
        
//     }
//   return (
//     <Card>
//         <CardHeader>
//             <CardTitle>Login</CardTitle>
//             <CardDescription>
//                 Login to your account with your credentials.
//             </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-2">

//     <FormProvider  {...form}>
//         <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
//         <FormField
//   control={form.control}
// name="email"
//   render={({ field }) => (
//     <FormItem>
//       <FormLabel className="uppercase text-xs font-bold text-zinc-500 ">Email</FormLabel>
//       <FormControl>
//         <Input className="bg-slate-100 border focus-visible:ring-0 text-black focus-visible:ring-offset-0" placeholder="Your Email" {...field} />
//       </FormControl>
      
//       <FormMessage />
//     </FormItem>
//   )}
// />
// <FormField
//   control={form.control}
// name="password"
//   render={({ field }) => (
//     <FormItem>
//       <FormLabel className="uppercase text-xs font-bold text-zinc-500 ">Password</FormLabel>
//       <FormControl>
//         <Input type="password" className="bg-slate-100 border focus-visible:ring-0 text-black focus-visible:ring-offset-0" placeholder="Your Password" {...field} />
//       </FormControl>
      
//       <FormMessage />
//     </FormItem>
//   )}
// />
// <Button className="w-full">
//   Sign In
// </Button>
//         </form>

//     </FormProvider>
//         </CardContent>
//     </Card>
//   )
// }

// export default LoginForm

"use client";

import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useStore from "../../../../store";


const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Please enter a valid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

function LoginForm() {
  const router = useRouter();
  const setEmail = useStore((state: { setEmail: (email: string) => void }) => state.setEmail);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    setEmail(data.email);  // Store email in Zustand
    router.push("/admin");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to your account with your credentials.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-slate-100 border focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                      placeholder="Your Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-slate-100 border focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                      placeholder="Your Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
