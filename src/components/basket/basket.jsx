import React from 'react';
import  './basket.css';
import Empty from '../emptybasket/emptybasket';
import {motion} from 'framer-motion';


const Basket = ({cartdata,removecart,updatebasket,emptycart,totalprice}) => {
        if(!cartdata.line_items  || !cartdata.line_items.length)
        return (
          <Empty />
        )
    return (
        <div className="basket__header">
           
             <h1>your cart</h1>
          {cartdata.line_items.map((product)=>{
              return(
                  <motion.div 
                  initial={{
                      opacity:0,
                      x:600,
                  }}
                  animate={{
                      x:0,
                      opacity:1,
                  }}
                  transition={{
                      type:'spring',
                      stiffness:70,
                      duration:1,
                  }}
                  key={product.id} className="cart__container">
                      <div className="cart__img">
                          <img src={product.media.source} alt="" />
                      </div>
                    <div className="cart__info">
                        <h5>{product.name}</h5>
                        <h4>{product.price.formatted_with_symbol}</h4>
                        <button onClick={()=>{removecart(product.id)}}>remove</button>
                    </div>
                    <div className="update__cart">
                        <button onClick={()=>{updatebasket(product.id,product.quantity + 1)}}>+</button>
                        <h5>{product.quantity}</h5>
                        <button  onClick={()=>{updatebasket(product.id,product.quantity - 1)}}>-</button>
                    </div>
                  </motion.div>
              )
             
          })}
                 
                      <div className="empty__checkout">
                          <button onClick={emptycart} className="emptybtn">emptycart</button>
                          <button className="checkoutbtn" onClick={()=>{
                              alert('work in process...')
                          }}>checkout</button>
                      </div>

        </div>
    )
}

export default Basket
