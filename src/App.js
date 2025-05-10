import React, { use, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import items from "./data/DataBase";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


function App() {
  const [order, setOrder] = useState([]);
  const [category, setCategory] = useState('all');
  const [fullItem, setFullItem] = useState(false);
  const [id, setId] = useState();


  
  return ( 
    <div className="wrapper">
      <Header items={order} setOrder={setOrder}/>
      <Categories setCategory={setCategory}/>
      {fullItem? <ShowFullItem id={id} item_list={items} setFullItem={setFullItem}/>: ''}
      <Items item_list={items} 
              setOrder={setOrder} 
              category={category} 
              setId={setId} 
              setFullItem={setFullItem}/>
      <Footer/>
    </div>
   );
}


export default App;
