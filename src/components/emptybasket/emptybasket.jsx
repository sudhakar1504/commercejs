import lottie from 'lottie-web';
import {Link} from 'react-router-dom';
import React,{useEffect,useRef} from 'react';
import {motion} from 'framer-motion';
import './emptybasket.css';;


const Emptybasket = () => {
    const container =useRef(null);
    useEffect(() => {
       lottie.loadAnimation({
           container:container.current,
           loop:true,
           autoplay:true,
           animationData:require('../../image/empty.json'),
           renderer:'svg'
       })
    }, []);
    return (
        <div className="emptybasket">
            
            <div className="info__empty">
                <h2>\__No Order Yet__/</h2>
                <p>your cart is empty.add something from home.</p>
                <Link to="/">
                <motion.button initial={{
                    opacity:0,
                    x:-90,
                }}
                animate={{
                    opacity:1,
                    x:0,
                }}
                transition={{
                    duration:1,
                    type:'spring'
                }} >go shop</motion.button>
                </Link>
            </div>
            <div className="empty__logo">
                
               <div className="lottie__loader" ref={container}></div>
            </div>
        </div>
    )
}

export default Emptybasket
