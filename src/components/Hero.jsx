import React from 'react'

import './style.css'
import video from "../assets/video.mp4"

const Hero = () => {
  return <>
    {/* carousel start */}

    <div className='flex justify-center pt-16'>
      <video
        src="https://videos.pexels.com/video-files/2894881/2894881-uhd_2560_1440_24fps.mp4"
        id='video'
        className='rounded-xl '
        autoPlay
        loop
        muted
        playsInline
        style={{ objectFit: 'cover' }}
      />


    </div>
    <h1 className="text-4xl font-semibold mt-5 mb-16 flex justify-center">New Launch Dish</h1>
    <hr />

    {/* featured categories */}
    <h1 className="text-4xl font-semibold pl-20 mt-20 mb-5">Karan Special Dishes</h1>
    <div className='px-28 mb-36'>

      <div className="carousel  w-full grid-cols-2 justify-between ">
        <div id="slide1" className="carousel-item gap-6 py-4  my-6  mx-4 flex relative w-full ">


          <div className="carousel gap-3 ">
            <div className="carousel-item h-56 c1   ">
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1   ">
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1   ">
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1604152135912-04a022e23696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>

            <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1">
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            {/* <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div> */}
            <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1   ">
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            {/* <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://plus.unsplash.com/premium_photo-1673793535072-148e7ef7bd41?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1   ">
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1613454320437-0c228c8b1723?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1613462847848-f65a8b231bb5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div> */}

            {/* <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div> */}
            {/* <div className="carousel-item h-56 c1   ">
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1629385694449-ebe2ccbd226c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1584473457406-6240486418e9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1609842947419-ba4f04d5d60f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://plus.unsplash.com/premium_photo-1664544673662-e80e311da294?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1   ">
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1631730486572-226d1f595b68?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1610219171189-286769cc9b20?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div> */}
            <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://plus.unsplash.com/premium_photo-1673793535072-148e7ef7bd41?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div>
            {/* <div className="carousel-item h-56 c1 " >
              <img className='rounded-lg ' src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Burger" />
            </div> */}
          </div>

        </div>

      </div>
    </div>


    {/*  */}
    {/* <div>
      <div className="container ">
        <div className="row flex gap-5 px-40 ">
          <div className="col-sm-6">
            <div id='img3' className='relative'>
              <img className='img3 rounded-md' src="https://images.unsplash.com/photo-1592201426550-83c4be24a0a7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className='absolute top-2  mt-8 mx-8'>

                <h1 className='text3'>Fruits & Vegetables</h1>
                <p className='p3'>Get Upto 30% Off</p>
                <button className='btn3'>Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div id='img4' className='relative'>
              <img className='img4 rounded-md h-200px h-auto' src="https://images.unsplash.com/photo-1589378884250-431463f05637?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className='absolute top-4 mt-10 mx-10'>
                <h1 className='text4'>Freshly Backed Buns</h1>
                <p className='p4'>Get Upto 25% Off</p>
                <button className='btn4'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/*  */}
  </>
}

export default Hero


