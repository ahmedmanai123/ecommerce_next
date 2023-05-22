"use client"; 
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { Button } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';


import { useEffect,useState } from 'react'; 
import { useRouter } from 'next/navigation'; 

import  '../app/globals.css'
import  '../app/style.scss'
import { useShoppingCart } from "use-shopping-cart" ;
import ShoppingCart from './ShoppingCart';
import Image from "next/image";
import {useSession, signOut} from 'next-auth/react'; 
import '@fortawesome/fontawesome-free/css/all.min.css'
import Head from 'next/head';
 function Navbar() {
  const {data} = useSession();
    const { handleCartClick, cartCount } = useShoppingCart();
   
    const router = useRouter(); 
 
 const [onTop, setOnTop] = useState(true); 
 useEffect(() => { 
 window.addEventListener('scroll', handleScroll); 
 }); 
 const handleScroll = () => { 
 if(window.pageYOffset === 0) { 
 setOnTop(true); 
 } else { 
 setOnTop(false); 
 } 
 } 

  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
        <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
        <script src="/js/script.js"></script>
      </Head>
      {data? (
       <header className='header'>

<a href="#" className='logo'> <i className='fas fa-shopping-cart'></i> shop </a>

<nav className='navbar'>
 
    <>
      <a href="#home"onClick={() => router.push('/')}>home</a>
      <a href="#products" onClick={() => router.push('/cartProducts')}>products</a>
      <a href="#featured">featured</a>
      <a href="#review">review</a>
      <a href="#contact" onClick={() => router.push('/contact')}>contact</a>
      <a href="#blogs" onClick={() => router.push('/blogs')}>blogs</a>
      <span style={{ marginRight: "15px", color: "orange" }}>
        USER: {data?.user?.email}
      </span>
      <Button color="inherit" onClick={() => signOut()}>
        <ExitToAppRoundedIcon style={{ color: 'gray', fontSize: 36 }}/> Logout
      </Button>
    </>
 
</nav>


<div className='icons'>
    <div id="menu-btn" className='fas fa-bars'></div>
    <div id="search-btn" className='fas fa-search'></div>
    <a href="#"onClick={() => handleCartClick()} className='fas fa-shopping-cart'>{cartCount}</a>
       
    <a href="#" className='fas fa-heart'></a>
 


</div>
<ShoppingCart />
<form action="" className='search-form'>
    <input type="search" name="" placeholder="search here..." id="search-box"/>
    <label htmlFor="input-field" className='fas fa-search'></label>
</form>

</header>
 ) : (
  

  <Button color="inherit" onClick={() => router.push('/login')}>
    <FaceIcon style={{ color: 'green', fontSize: 36 }}/> Login
  </Button>
)}
  
    
    </>
  )
}
export default Navbar;