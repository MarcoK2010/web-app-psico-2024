import React from 'react'
import PsychologistCard from './PsychologistCard'
const PsychologistCarousel = () => {
  return (
   <>
  
   <div className="lg:w-full w-96 carousel rounded-box">
  <div className="carousel-item">
   <PsychologistCard  title={"PRACTICANTE 1"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-citUgg2a7GUhivVmW3rxBRmWOuMMK3VlQ&s"} />
  </div>
  <div className="carousel-item">
  <PsychologistCard  title={"PRACTICANTE 2"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-citUgg2a7GUhivVmW3rxBRmWOuMMK3VlQ&s"}/>

  </div>
  <div className="carousel-item">
  <PsychologistCard  title={"PRACTICANTE 3"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-citUgg2a7GUhivVmW3rxBRmWOuMMK3VlQ&s"}/>

  </div>
  <div className="carousel-item">
  <PsychologistCard  title={"PRACTICANTE 4"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-citUgg2a7GUhivVmW3rxBRmWOuMMK3VlQ&s"}/>

  </div>
  <div className="carousel-item">
  <PsychologistCard  title={"PRACTICANTE 5"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-citUgg2a7GUhivVmW3rxBRmWOuMMK3VlQ&s"}/>

  </div>
  <div className="carousel-item">
  <PsychologistCard  title={"PRACTICANTE 6"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-citUgg2a7GUhivVmW3rxBRmWOuMMK3VlQ&s"}/>

  </div>
  <div className="carousel-item">
  <PsychologistCard  title={"PRACTICANTE 7"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-citUgg2a7GUhivVmW3rxBRmWOuMMK3VlQ&s"}/>

  </div>
</div>
   </>
  )
}

export default PsychologistCarousel