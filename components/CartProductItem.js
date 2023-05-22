"use client"; 
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart" ;
import React,{ useState } from "react"; 
const CartProductItem= ({product})=> { 
  const { addItem } = useShoppingCart();
 const [quantity, setQuantity] = useState(1); 
 const decreaseQuantity = () => { 
 if (quantity > 1) { 
 setQuantity(quantity - 1); 
 } 
 }; 
 
 const increaseQuantity = () => { 
 setQuantity(quantity + 1); 
 }; 
 const addToCart = () => { 
  addItem(product, { count: quantity }); 
  setQuantity(1); 
  }; 
 return ( 
 
<>

<section className="products" id="products">
        <div className="box-container grid-container">
          
            <div key={product?.id} className="box cart">
              <div className="icons">
                
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-search"></a>
                <Link href={`/products/${product?.id}`}>
                  <span className="fas fa-eye"></span>
                </Link>
              </div>
              <div className="image">
                <img src={product?.images} alt={product.title} />
              </div>
              <div className="content">
                
                <div className="price">
                  <div className="amount">{product.id}</div>
                  <div>{product.name}</div>
                  <div>{product.title}</div>
                  <div className="offer">${product?.price}</div>
                </div>
                <div className="quantity">
                  <button onClick={() => decreaseQuantity()}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => increaseQuantity()}>+</button>
                </div>
                <button onClick={() => addToCart(products)}>Add to cart</button>
              </div>
            </div>
         
        </div>
      </section>

      <style jsx>{`
        .products {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .box-container {
          flex-wrap: wrap;
          display: grid;
          justify-content: center;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }
        
        .box.cart {
          margin: 0 0.5rem;
        }
        
        @media only screen and (max-width: 668px) {
          .box-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        .quantity {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .quantity button {
          background: none;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          padding: 0.5rem;
          margin: 0 0.5rem;
          color: #333;
        }
        
        .quantity span {
          font-size: 1.2rem;
          font-weight: bold;
        }
        button {
          background: #ff4500;
          color: #fff;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
        }
        
      
      
        
      `}</style>
</>
 ); 
} 
export default CartProductItem;