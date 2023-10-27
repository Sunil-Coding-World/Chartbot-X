import React from 'react'
import {IoBookOutline} from "react-icons/io5";
import {FiLogIn} from "react-icons/fi";
import {FaUser} from "react-icons/fa";
import {motion} from "framer-motion"
const Header = ({isAuthenticed=true}) => {
  return (
    <nav>
        <motion.div
        initial={{x:"-100"}}
        whileInView={{ x: 0 }}
        transition={{delay:1}}
      >
      <a href ="/">
        <IoBookOutline/>
      </a>
        </motion.div>
        <div>
            <a href ="/" > home</a>
            <a href ="/" > courses</a>
            <a href ="/" > contact</a>
            <a href ="/" > about</a>
            <a href ={isAuthenticed ? "/profile" : "/login"}>
            {isAuthenticed ? <FaUser/> : <FiLogIn/>}
            </a>
        </div>
    </nav>
  )
}

export default Header