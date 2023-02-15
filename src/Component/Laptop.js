import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../Style/Style.css";
// import { Link } from 'react-router-dom';

const Laptop = () => {
    const [data, setData] = useState([]);
    
    useEffect(() =>{
        axios.get("http://localhost:4400/laptop")
            .then( res =>{
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[]);
  return (
   <>
   <div className='heading'>Laptop</div>
   <div className='main'>
    {
        data.map(data => 
            <div className='main-container' key={data.id}>
                <div className='image-section'>
                    <img src={data.image} alt="Not Found" /><br />
                </div>
                <div className='name-section'>
                    <p>{data.name}</p><br />
                </div>
                <div className='ratting-section'>
                    <img src={data.ratting} alt="Not Found" style={{width: "120px"}} /> <br />
                </div>
                <div className='price-section'>
                    <p className='price'>{data.price}</p>  
                    <p className='oldPrice-section'>{data.oPrice}</p>
                </div>
                <button className='item_button'>Add To Cart</button>
            </div>)
    }
    </div>
    </>
  )
}

export default Laptop;