import { useState } from 'react';
import './App.css';
import { snacks } from './data';
function App() {
function sortFunc(event)
{
  console.log(event.target.innerText)
  if(event.target.innerText==="Id")
  {
    const x=sortBy?[...snacks].sort((a,b)=>a.id-b.id):[...snacks].sort((a,b)=>b.id-a.id)
    console.log(x)
    setData(x)
    setSort(!sortBy)
  }
  else if(event.target.innerText==="Product Name")
  {
    const x=sortBy?snacks.sort((a,b)=>(a.product_name.toLowerCase() > b.product_name.toLowerCase()) ? -1 : ((b.product_name.toLowerCase() > a.product_name.toLowerCase()) ? 1 : 0)):snacks.sort((a,b)=>(a.product_name.toLowerCase() < b.product_name.toLowerCase()) ? -1 : ((b.product_name.toLowerCase() > a.product_name.toLowerCase()) ? 1 : 0))
    setData(x)
    setSort(!sortBy)
  }
  else if(event.target.innerText==="Product Weight")
  {
    const x=[...snacks].sort((a,b)=>(a.product_weight > b.product_weight) ? -1 : ((b.product_weight > a.product_weight) ? 1 : 0))
    console.log(x)
    setData(x)
  }
  else if(event.target.innerText==="Price")
  {
    const x=sortBy?[...snacks].sort((a,b)=>a.price-b.price):[...snacks].sort((a,b)=>b.price-a.price)
    setData(x)
    setSort(!sortBy)
  }
  else if(event.target.innerText==="Calories")
  {
    const x=sortBy?[...snacks].sort((a,b)=>a.calories-b.calories):[...snacks].sort((a,b)=>b.calories-a.calories)
    setData(x)
    setSort(!sortBy)
  }
  
  
}
function searcData(event)
{
  const str=event.target.value
  const x=[...snacks].filter((val)=>val.product_name.toLowerCase().includes(str))
  setData(x)
  const y=[...snacks].map(({ingredients})=>ingredients.filter((val)=>val.toLowerCase().includes(str)))
  console.log(y)
  // setData(y)
}
  const [snacksData,setData]=useState(snacks)
  const [sortBy,setSort]=useState(false)
  return (
    <div className="App">
      <section>
        <input type='text' onChange={(e)=>searcData(e)}></input>
        <table>
          <tr>
            <th onClick={(e)=>sortFunc(e)}>Id</th>
            <th onClick={(e)=>sortFunc(e)}>Product Name</th>
            <th onClick={(e)=>sortFunc(e)}>Product Weight</th>
            <th onClick={(e)=>sortFunc(e)}>Price</th>
            <th onClick={(e)=>sortFunc(e)}>Calories</th>
            <th onClick={(e)=>sortFunc(e)}>Ingredients</th>
          </tr>
          
              {snacksData.map(({id,product_name,product_weight,price,calories,ingredients})=><tr><td>{id}</td><td>{product_name}</td><td>{product_weight}</td><td>{price}</td><td>{calories}</td><td>{ingredients}</td></tr>)}
              {/* <tr><td>{id}</td><td>{product_name}</td>{product_weight}{price}{calories}{ingredients}</td></tr */}
          
        </table>
      </section>
    </div>
  );
}

export default App;
