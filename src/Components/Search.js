import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Receipts from './Receipts';

const Search=() => {
const initialValue=""
    const [receipts,setReceipts]=useState(initialValue);
    const [loading,setLoading]=useState();
    const [searchVal,setSearchVal]=useState("");


    useEffect(()=>{
axios.get(`https://lambda-webpt-rta-api.herokuapp.com/api/receipt/${searchVal}`)
    .then((res)=>{console.log(res)})
    .then((res)=>{setReceipts(res)})


},[])

const onChangeHandler =  event => {
    setSearchVal({ [event.target.name]:event.target.value });
  };






    return(
            <div>
                <input
                    name='searchVal'
                    onChange={e => onChangeHandler(e)}
                    placeholder="Type something to search"
                />
               
                {receipts&&receipts.length  > 0  ?  <Receipts list={receipts} />:<h1>There's no receipts</h1>}
            </div>
    )
    
}
export default Search;