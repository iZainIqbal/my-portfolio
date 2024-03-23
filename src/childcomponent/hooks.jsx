import React ,{useState} from 'react' ;
import { ReactDOM } from 'react';

function FavouriteColor(){
    const [color ,setcolor] = useState('Red');
    return <>
        <p> Favourite Color is {color}! </p>
        <button onClick={()=> setcolor('Blue') }>Red</button>
    </>

}
export default FavouriteColor;
