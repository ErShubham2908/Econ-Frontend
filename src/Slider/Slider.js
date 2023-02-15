import React, {useEffect, useState} from 'react';
import img1 from "./Image/1.png";
import img2 from "./Image/2.jpg";
import img3 from "./Image/3.jpg";
import img4 from "./Image/4.jpg";
import img5 from "./Image/5.png";
import "./Style.css"


const Slider = () => {
  const [selectImage, setSelectImage] = useState(0);
  const [allImage ] = useState([img1, img2, img3, img4, img5]);

  useEffect(() =>{
    setInterval(() => {
      setSelectImage(selectImage => selectImage < 4 ? selectImage + 1 : 0)
    }, 3000);
  }, [])
  console.log(selectImage)
  return (
    <div>
      <img className='imageSlider' src={allImage[selectImage]} alt="Not Found"  />
    </div>
  )
}

export default Slider;