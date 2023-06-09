import React from "react"; 
import dynamic from 'next/dynamic'
const AffTableProducts = dynamic(() =>
import('@/components/affTableProducts'), { 
 loading: () => 'Loading...', ssr: false, 
}) 
async function getProducts(){ 
 const res= await fetch('http://localhost:3001/api/products',{cache:"no-store"}) 
 const products = await res.json(); 
 return products; 
} 
const tableProducts= async ()=> { 
 const products = await getProducts(); 
 return ( 
 <div className="container mx-auto shadow p-3">
 <AffTableProducts products={products} />
 </div>
 ) 
} 
export default tableProducts;