import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FiLogIn} from "react-icons/fi";
import {FaUser} from "react-icons/fa";
import {motion} from "framer-motion"
import { faRobot } from '@fortawesome/free-solid-svg-icons';
const Header = ({isAuthenticed=false}) => {
  return (
    <nav>
        <motion.div
        initial={{x:"-100"}}
        whileInView={{ x: 0 }}
        transition={{delay:1}}
      >
      <a href ="/">
      <FontAwesomeIcon className="open-icon" icon={faRobot} />
      </a>
        </motion.div>
        <div>
            <a href ="/" > home</a>
            <a href ="/" > courses</a>
            <a href ="/" > contact</a>
            <a href ="/" > about</a>
            <a href ={isAuthenticed ? "/" : "/"}>
            {isAuthenticed ? <FaUser/> : <FiLogIn/>}
            </a>
        </div>
    </nav>
  )
}

export default Header