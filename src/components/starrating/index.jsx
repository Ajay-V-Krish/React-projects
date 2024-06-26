import { FaStar } from 'react-icons/fa'
import { useState } from 'react';
import './style.css'


export default function Starrating({noOfStars}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(){
     setHover(rating)
    }

    return <div>
       <div className='back'>

        <h1>Star-Rating</h1>

      {
        [...Array(noOfStars)].map((_,index)=>{
               index += 1

            return <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={()=>handleClick(index)}
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave(index)}
            size={100}
            />
        })
      }

    </div>
      
    </div>
}