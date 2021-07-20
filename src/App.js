import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Basket from './components/basket/basket';
import Loader from './components/loader/loader';
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar';
import Proudct from './components/productlayout/Proudct';
import {commerce} from './lib/commerce'
function App() {
  const [dataa, setDataa] = useState([]);
  const [basketdata, setBasketdata] = useState({});
 
  
  const fetchdata= async ()=>{
   const {data} = await commerce.products.list();
   setDataa(data)
  }

  const fetchbasketdata= async ()=>{
    const response= await commerce.cart.retrieve();
     setBasketdata(response);
  } 

  useEffect(() => {
   fetchdata();
   fetchbasketdata();
  }, []);
  

   const addbasketcart= async (productId,quantity)=>{
      const response= await commerce.cart.add(productId,quantity);
      setBasketdata(response.cart);
   }
  
   const removecart = async (productId)=>{
     const response = await commerce.cart.remove(productId);
     setBasketdata(response.cart);
   }
   const updatecart = async (productId,quantity)=>{
     const response = await commerce.cart.update(productId,{ quantity });
     setBasketdata(response.cart);
   }
   const emptycart = async () =>{
     const response =  await commerce.cart.empty();
     setBasketdata(response.cart)
   }
   
         if(!dataa.length){
           return(
             <Loader />
           )
         }
  return (
    <Router>
      <div>
       <div className="navbar__app">
         <Navbar totalitems={basketdata.total_items} totalprice={(basketdata.subtotal && basketdata.subtotal.formatted_with_symbol) || "00:00"}/>
       </div>
     <Switch>
       <Route exact path="/">
       <Proudct data={dataa} addbasketcart={addbasketcart}  />
       </Route>
       </Switch>
       <div className="basket">
         <Switch>
           <Route exact path="/basket">
              <Basket cartdata={basketdata} updatebasket={updatecart} removecart={removecart} emptycart={emptycart}  totalprice={(basketdata.subtotal && basketdata.subtotal.formatted_with_symbol) || "00"}/>
           </Route>
         </Switch>
         </div> 
         <Footer />
      </div>
    </Router>
  );
}

export default App;
