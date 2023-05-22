import React from 'react'
import { notFound } from "next/navigation";
async function getProductDetails(id){ 
 try { 
 const res = await fetch 
(`http://localhost:3001/api/products/${id}`); 
 const product = await res.json(); 
 return product; 
 } 
 catch (error) { 
 console.log(error); 
 } 
} 
const ProductDetails = async ({params}) => { 
 const product = await getProductDetails(params.id); 
 
 if (!product || !product?.title) notFound();
 
 return ( 
<>
  <div className='small-container'>
   <div className='row'>
    <div className='col-2'>
        <img src={product.images[0]}alt={product.title} width={"100%"} id='ProductImg'/>
        <div className='small-img-row'>
        
         <div className='small-img-col'>
         {product.images.map((image, index)=>( 
            <img  key={index} src={image}alt={product.title}
            width={'100%'} className='small-img'/>
            ))}
         </div>
         
            
    
        </div>
    </div>
    <div className='col-2'>
       <p> tshirt</p>
       <h2> bhdhfyrfiijhic</h2>
       <h4>$29.5</h4>
       <input type='number' value={1}/>
       <a href='' className='btn'>add to cart</a>
       <h3>Product Detaill <i className='fa fa-indent'></i></h3>
       <br/>
       <p></p>
    </div>
   </div>
  </div>
</>

 ) 
} 
export default ProductDetails
