import Container from "../../../components/Container";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Table, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table";
import React from "react";
import { client } from "@/sanity/lib/client";
import { allOrders } from "@/sanity/lib/queries";
import { Order } from "../../../../../types/products";
import BackButton from "@/app/components/admin/BackButton";

const OrdersPage = async () => {
    const orders:Order[] = await client.fetch(allOrders)
  return (
    <Container className="py-10">
    <BackButton text='Go Back' link='/admin'/>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full">
            <Table>
                 <TableHeader>
                    <TableRow>
                      <TableHead>
                        Order ID
                      </TableHead>
                      <TableHead className='hidden md:table-cell'>
                        Place at
                      </TableHead>
                      <TableHead className='hidden md:table-cell'>
                     Customer Name
                      </TableHead>
                      <TableHead>
                      Customer email
                      </TableHead>
                      <TableHead>
                   Total Price
                      </TableHead>
                      <TableHead>
                    Status
                      </TableHead>
                      <TableHead>
                   Invoice ID
                      </TableHead>
                    </TableRow>
                  </TableHeader>
      {orders.map((order) => (
        <TableRow key={order._id}>
          <TableCell>{order._id}</TableCell>
          <TableCell className="hidden md:table-cell">
            {new Date(order.orderDate).toLocaleDateString()}
          </TableCell>
          <TableCell>{order.customerName}</TableCell> {/* Add customer name if available */}
          <TableCell className="hidden sm:table-cell">{order.email}</TableCell>
          <TableCell>
            ${order.totalPrice}
            {/* {order.products.reduce((total, item) => total + item.product.price, 0).toFixed(2)} */}
          </TableCell>
          <TableCell>{order.status}</TableCell>
          <TableCell className="hidden sm:table-cell">INV-{order._id.slice(-6)}</TableCell>
        </TableRow>
      ))}
    </Table>
            </ScrollArea>
          </CardContent>
        </Card>
    </Container>
  );
};

export default OrdersPage;
