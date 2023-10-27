import React from 'react'
import {motion} from "framer-motion"

 const options= {
    initial:{x:"-100" , 
    opacity:0},
    whileInView:{x:"0" , 
     opacity: 1
   },
  }
  
const Home = () => {
 
  return (
    <>
  <section className='home'>
    <div>
    <motion.h1 {...options} transition={{delay:1}}>Chatbot X</motion.h1>
    <motion.p {...options}  transition={{delay:1}}>Your personalised Ai powered chatbot</motion.p>
    </div>  
    <motion.a href="/courses"
    {...options}  transition={{delay:1}}
        ><h6>Explore chatbot X</h6> </motion.a>  
    
  </section>
   
   </>
    )
}

export default Home