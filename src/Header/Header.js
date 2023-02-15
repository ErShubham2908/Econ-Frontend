import React from 'react'
import {Link} from 'react-router-dom';
import "../Style/Style.css"

const Header = () => {
  return (
    <div className='container'>
        <div className='icons'>
              <img className='icons1' src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="Not Found" style={{width: "2.5em"}} />
              <p className='profile'>My Profile</p>
              <img className='icons2' src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png" alt="Not Found" style={{width: "2.5em"}}/>
              <p className='items'>items</p>
        </div>
        <div className='ishop'>
           <span style={{fontFamily:"monospace", fontSize:"1.2em"}}>i</span> <span> SHOP </span>
        </div>
        <div className='page-section'>
          <p className='p-section'><Link className='link-section' to=''>Home</Link></p>
          <p className='p-section'><Link className='link-section' to='/mobile'>Mobile</Link></p>
          <p className='p-section'><Link className='link-section' to='/ipad'>Ipad</Link></p>
          <p className='p-section'><Link className='link-section' to='/laptop'>Laptop</Link></p>
          <p className='p-section'><Link className='link-section' to='/macbook'>MacBook</Link></p>
          <p className='p-section'><Link className='link-section' to='/accessories'>Accessories</Link></p>
        </div>
    </div>
  )
}

export default Header;