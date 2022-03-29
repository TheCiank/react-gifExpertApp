import React, {useState} from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


export const GifExpertApp = () => {

//   const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategory] = useState( ['One Punch']);

  return (
    <>
      <h2>Gif Expert App</h2> 
      <hr/>

    <AddCategory setCategory={setCategory} />

      <ol>
          {
              categories.map((category) => 
                  <GifGrid key={category} 
                           category={category}/>
              )
          }
      </ol>
    </>
  )
}
