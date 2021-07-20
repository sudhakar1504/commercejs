import List from '../productlist/list';
import Banner from '../banner/banner'
import React,{useEffect,useRef} from 'react';
import  {Container,Grid} from '@material-ui/core';
import {motion,useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer'
import './products.css'
 
const Proudct = ({data,addbasketcart}) => {
    
    const {ref , inView} =useInView();
        const animation =useAnimation();
        useEffect(() => {
           if(inView){
               animation.start({
                   y:0,
                   opacity:1,
                   transition:{
                       type:'tween',
                       duration:1,
                       
                   }
               })
           }
           if(!inView){
               animation.start({
                   y:300,
                   opacity:0
               })
           }
        }, [inView]);

    
    return (
       <div>
           
               <Banner />
           
            <div className="product__contain" ref={ref} id="list">
            <div className="head" >
                <h1>Featured Collections</h1>
            </div>
          <Container>
              <Grid spacing={1} container>
                  {data.map((product) =>{
               return (
                   <div className="product__container" key={product.id}>
                       <List product={product} key={product.id} addcart={addbasketcart} animation={animation}/>
                   </div>
               )
           })}
           </Grid>
           </Container>
        </div>
       </div>
    )
}

export default Proudct
