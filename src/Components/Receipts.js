import React from 'react'

const Receipts=( {list} ) => {
    return ( 
           list& list.map( ( receipt ) => {
                return (

                    <div><h2>{receipt.amount}</h2>
                        <a href={receipt.url} >

                            {receipt.id}
                        </a>
                    </div>
                )
            }
            )
        
    )
}


export default Receipts