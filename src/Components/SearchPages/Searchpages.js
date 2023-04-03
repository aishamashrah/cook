import React from 'react'



export default function Searchpages(props) {
  return (
    <>
     
    <div class=" gap-4 max-w-5xl mt-8  Image">
    <img src={props.img} class="w-full h-40 object-cover mb-4 rounded-lg"/>
  <div class=" p-5 rounded-lg shadow-md">
    <h1>{props.type}</h1>
    <p class="text-gray-600"> {props.text}</p>
  </div>
  
</div>
</>
  )
}
