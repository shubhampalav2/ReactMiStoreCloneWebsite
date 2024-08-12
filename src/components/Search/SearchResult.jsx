import React from 'react'
import HotItemCard from '../HotItemCard';
import "../../styles/HotItemCard.css";

const SearchResult = ({res}) => {
  return (
    <div className='navOptions'>
    <div>
    {res.map((item,index)=>(
               <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                     
              ))}
    </div>
    </div>
  )
}

export default SearchResult;