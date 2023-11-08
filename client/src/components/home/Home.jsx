import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const options = {
  initial: { x: "-100", opacity: 0 },
  whileInView: { x: "0", opacity: 1 },
};

const Home = () => {
  const words = ["Your personalized AI-powered chatbot", "Discover with", "Interact with", "Engage with"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the word every second
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const wordChangeAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options} transition={{ delay: 1 }}>Chatbot X</motion.h1>
          <motion.p {...options} transition={{ delay: 1 }}>
            <motion.div
              key={currentWordIndex}
              variants={wordChangeAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {words[currentWordIndex]}
            </motion.div>
          </motion.p>
        </div>
        <motion.a href="/chatbot" {...options} transition={{ delay: 1 }}>
          <h4>explore</h4>
        </motion.a>
      </section>
    </>
  );
};

export default Home;
