import React from 'react'
import PsychologistCard from './PsychologistCard'
const PsychologistCarousel = () => {
  return (
   <>
  
    <div className=" font-bold content-left text-left md:p-10 p-2 sm:ml-0  ">
        <h1 className="font-black text-4xl ml-20">Psycholigist</h1>
        <div className="carousel w-full mt-10">
  <div id="slide1" className="carousel-item relative w-full justify-around ">

           <PsychologistCard image={'https://oed.com.ph/wp-content/uploads/2021/11/Image-53-1.png'} title={'Practicante 1'}/>
            <PsychologistCard image={'https://oed.com.ph/wp-content/uploads/2021/11/Image-53-1.png'} title={'Practicante 2'}/>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className=" btn-circle">❮</a> 
      <a href="#slide2" className=" btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full justify-around">
  <PsychologistCard image={'https://oed.com.ph/wp-content/uploads/2021/11/Image-53-1.png'} title={'Practicante 3'}/>
            <PsychologistCard image={'https://oed.com.ph/wp-content/uploads/2021/11/Image-53-1.png'} title={'Practicante 4'}/>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className=" btn-circle">❮</a> 
      <a href="#slide3" className=" btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full justify-around">
  <PsychologistCard image={'https://oed.com.ph/wp-content/uploads/2021/11/Image-53-1.png'} title={'Practicante 5'}/>
            <PsychologistCard image={'https://oed.com.ph/wp-content/uploads/2021/11/Image-53-1.png'} title={'Practicante 6'}/>
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className=" btn-circle">❮</a> 
      <a href="#slide4" className=" btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full justify-around">
  <PsychologistCard image={'https://oed.com.ph/wp-content/uploads/2021/11/Image-53-1.png'} title={'Practicante 7'}/>
            <PsychologistCard image={'https://oed.com.ph/wp-content/uploads/2021/11/Image-53-1.png'} title={'Practicante 8'}/>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className=" btn-circle">❮</a> 
      <a href="#slide1" className=" btn-circle">❯</a>
    </div>
  </div>
</div>
      </div>
   </>
  )
}

export default PsychologistCarousel