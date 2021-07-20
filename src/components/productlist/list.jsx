import React,{useEffect,useRef} from 'react';
import {stripHtml} from 'string-strip-html';
import './list.css';
import {motion,useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer'

const List = ({product,addcart,animation}) => {
    const {result} = stripHtml(product.description);

   
        
    return (
      
        <motion.div
         animate={animation}
        
       
        key={product.id} className="card__container" >
                <div className="image__container">
                    <img src={product.media.source} alt="product image" />
                </div>
                
                <div className="product__info">
                        <h3>{product.price.formatted_with_symbol}</h3>
                        <h4>{product.name}</h4>
                        
                        <button onClick={()=>{addcart(product.id,1)}}>add to cart</button>
                </div>
                    
        </motion.div>
      
    )
}

export default List
