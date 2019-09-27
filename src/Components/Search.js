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

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [user, setUser] = useState({ username: "", password: "" });

//   const handleChange = event => {
//     setUser({ ...user, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(user.name);
//     console.log(user.password);
//   };

//   return (
//     <div className="App">
//       {console.log(user)}
//       <form onSubmit={event => handleSubmit(event)}>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={user.username}
//             onChange={event => handleChange(event)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="text"
//             name="password"
//             value={user.password}
//             onChange={event => handleChange(event)}
//           />
//         </label>
//         <button>Submit!</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//   search = async val => {
//     this.setState({ loading: true });
//     const res = await axios(
//       `https://lambda-webpt-rta-api.herokuapp.com/api/receipt/${val}`
//     );
//     const receipts = await res.data.results;
// console.log(res)
//     this.setState({ receipts, loading: false });
//   };

//   onChangeHandler = async e => {
//     this.search(e.target.value);
//     this.setState({ value: e.target.value });
//   };
