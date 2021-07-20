import React,{useEffect,useRef} from 'react';
import './loader.css';
import lottie from 'lottie-web';

const Loader = () => {
    const container =useRef(null);

    useEffect(() => {
      lottie.loadAnimation({
        container:container.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData:require('../../image/lottie.json')
      })
    }, [])

    return (
        <div className="loader">
            <div className="container" ref={container}></div>
        </div>
    )
}

export default Loader
