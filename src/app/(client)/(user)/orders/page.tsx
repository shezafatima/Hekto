// import Container from "../../components/Container";
// import OrdersComponent from "../../components/OrdersComponent";
// import Title from "../../components/Title";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
// import { ScrollArea, ScrollBar } from "../../../components/ui/scroll-area";
// import { Table, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
// import { getMyOrders } from "@/sanity/helpers/queries";
// import { auth } from "@clerk/nextjs/server";
// import { FileX } from "lucide-react";
// import Link from "next/link";
// import { redirect } from "next/navigation";
// import React from "react";

// const OrdersPage = async () => {
//   const { user } = await auth();
//   if (!user) {
//     return redirect("/");
//   }
//   const orders = await getMyOrders(user?.email)

//   return (
//     <Container className="py-10">
//       {orders?.length ? (
//         <Card className="w-full">
//           <CardHeader>
//             <CardTitle className="text-2xl md:text-3xl">Order List</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ScrollArea className="w-full">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="w-auto">Order Number</TableHead>
//                     <TableHead className="hidden md:table-cell">Date</TableHead>
//                     <TableHead>Customer</TableHead>
//                     <TableHead className="hidden sm:table-cell">
//                       Email
//                     </TableHead>
//                     <TableHead>Total</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead className="hidden sm:table-cell">
//                       Invoice Number
//                     </TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <OrdersComponent orders={orders} />
//                 <ScrollBar orientation="horizontal" />
//               </Table>
//             </ScrollArea>
//           </CardContent>
//         </Card>
//       ) : (
//         <div className="flex flex-col items-center justify-center py-5 md:py-10 px-4">
//           <FileX className="h-24 w-24 text-gray-400 mb-4" />
//           <Title className="text-[#101750]">No orders found</Title>
//           <p className="mt-2 text-sm text-gray-600 text-center max-w-md">
//             It looks like you haven&apos;t placed any orders yet. Start shopping
//             to see your orders here!
//           </p>
//           <Button asChild className="mt-6 bg-[#101750] hover:bg-white hover:text-[#101750] hover:border border-[#101750]">
//             <Link href={"/"}>Browse Products</Link>
//           </Button>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default OrdersPage;
import { auth, clerkClient } from "@clerk/nextjs/server";
import { getMyOrders } from "@/sanity/helpers/queries";
import { redirect } from "next/navigation";
import Container from "../../../components/Container";
import OrdersComponent from "../../../components/OrdersComponent";
import Title from "../../../components/Title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import { Table, TableHead, TableHeader, TableRow } from "../../../../components/ui/table";
import { FileX } from "lucide-react";
import Link from "next/link";
import React from "react";

const OrdersPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }

  const client = await clerkClient();  

  
  const user = await client.users.getUser(userId); 

  if (!user) {
    return redirect("/");
  }

  const email = user.emailAddresses[0]?.emailAddress; 

  if (!email) {
    return redirect("/");
  }

  const orders = await getMyOrders(email);
  console.log("Fetched Orders:", orders)

  return (
    <Container className="py-10">
      {orders?.length ? (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Order List</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-auto">Order Number</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Email</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden sm:table-cell">Invoice Number</TableHead>
                  </TableRow>
                </TableHeader>
                <OrdersComponent orders={orders} />
                <ScrollBar orientation="horizontal" />
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center py-5 md:py-10 px-4">
          <FileX className="h-24 w-24 text-gray-400 mb-4" />
          <Title className="text-[#101750]">No orders found</Title>
          <p className="mt-2 text-sm text-gray-600 text-center max-w-md">
            It looks like you haven&apos;t placed any orders yet. Start shopping to see your orders here!
          </p>
          <Button asChild className="mt-6 bg-[#101750] hover:bg-white hover:text-[#101750] hover:border border-[#101750]">
            <Link href={"/"}>Browse Products</Link>
          </Button>
        </div>
      )}
    </Container>
  );
};

export default OrdersPage;

