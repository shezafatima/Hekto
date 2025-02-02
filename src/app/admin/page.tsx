import { Boxes,  MessageSquareText, Package } from "lucide-react";
import DashboardCard from "../components/admin/DashboardCard";
import ProductTable from "../components/admin/ProductTable";
import Conatainer from "../components/Container";
import AnalyticsChart from "../components/admin/AnalyticsChart";
import { client } from "@/sanity/lib/client";
import { allOrders, allProducts, allReviews } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function Home (){
    const products = await client.fetch(allProducts)
    const reviews= await client.fetch(allReviews)
    const orders=await client.fetch(allOrders)
    return (
        <Conatainer>
           
        <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
            <Link href={'/admin/product'}>
<DashboardCard title="Products" count={products.length} icon={ <Boxes className='text-slate-500 ' size={72}/>}/>
            </Link>
{/* <DashboardCard title="Users" count={100} icon={ <User className='text-slate-500 ' size={72}/>}/> */}
<Link href={'/admin/reviews'}>
<DashboardCard title="Reviews" count={reviews.length} icon={ <MessageSquareText className='text-slate-500 ' size={72}/>}/>
</Link>
<Link href={'/admin/orders'}>
<DashboardCard title="Orders" count={orders.length} icon={ <Package className='text-slate-500 ' size={72}/>}/>
</Link>
        </div>
        <AnalyticsChart/>
        <ProductTable title="Latest Products" limit={7}/>
        </Conatainer>
    )
}