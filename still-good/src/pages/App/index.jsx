import { useState, useEffect } from 'react'
import PWABadge from '../../components/PWABadge/index.jsx'
import './index.css'
import logo from '../../../public/assets/still good.png';


export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/login";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <body>
        
      
  
      <PWABadge />
      
      <div class="logo" >
   <img src={logo} alt="Logo" />
</div>
</body>
    </>
  )
}