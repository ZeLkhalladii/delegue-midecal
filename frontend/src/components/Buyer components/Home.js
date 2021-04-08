import React, { useEffect, useState } from 'react';
import './home.css';
import './NavBar';
import Navbaar from './NavBar';
import axios from 'axios'

export default function Home(props) {
  const [data, setData] = useState([])

  const getProduct = async () => {
    const result = await axios.get('http://localhost:5000/product/getAll')
    setData(result.data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
        <Navbaar></Navbaar>
        <div className="row">
  {data.map(items => (
       <div className="column">
       {/* <img src="/uploads/2021-04-08T10-45-24.571ZCap.PNG"/> */}
       <img src={`/uploads/${items.picture}`}/>
       <div className="card">
       <h3>{items.name}</h3>
         <h1>{items.price} MAD</h1>
         <button className="btncard">Add To card</button>
       </div>
       </div>
  ))}
</div>
    </div>
  )
}
