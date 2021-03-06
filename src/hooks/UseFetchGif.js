import { useEffect, useState } from "react";
import { getGifs } from '../Helpers/GetGifs';

export const useFecthGif = (category) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

   useEffect(()=> {
       getGifs(category).then((imgs) => {
          setState({
              data: imgs,
              loading: false
           });
       });

   },[category])

    return state;

}