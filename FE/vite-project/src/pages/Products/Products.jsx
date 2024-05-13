import React, { useEffect } from 'react'
import { useState } from 'react'

function Products() {
    const [products, setProducts] = useState([])
  useEffect(() => {
 
   getProducts()
  }, [])
  
  async function getProducts() {
    const res = await fetch("http://localhost:3000/fa")
    const data = await res.json()
    setProducts(data)
    
    
   }
  return (
   <>
       <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"50px",gap:"25px"}}>
    {products.map((x)=>(
        
      <>
    
          <div key={x.id} style={{width:"23%", border:"1px solid black"} }>
            <img src={x.image} style={{width:"300px",height:"300px"}} alt="" />
            <p>{x.price}</p>
            <p>{x.name}</p>
            <button>add basket</button>


          </div>
        
      </>
    ))}
       </div>
   </>
  )
}

export default Products
 