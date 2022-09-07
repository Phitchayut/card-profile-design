import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {BsFacebook,BsTwitter,BsInstagram,BsLine,BsGithub} from 'react-icons/bs'
import {FiMapPin} from 'react-icons/fi'
import {motion} from 'framer-motion'

const profile =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80";

function App() {
  return (
    <div
      className="App h-screen flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1696&q=80")`,
      }}
    >
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:.2}}
      className="card backdrop-blur-md bg-white/30 p-20 rounded-3xl">
        <div className="profile flex justify-center mb-5">
          <img className="w-56 h-56 rounded-full" src={profile} alt="" />
        </div>

        <div className="info text-center space-y-3">
          <h1 className="font-bold text-4xl">Rodrick maryman</h1>
          <p>Front-end Developer</p>
          <div className="flex justify-center space-x-2 items-center"><FiMapPin/><p>ABD, New York</p></div>
        </div>

        <div className="info text-center mt-5 flex justify-center space-x-10 uppercase">
          <div className="l">
            <h1 className="font-bold text-xl">850</h1>
            <p>followers</p>
          </div>
          <div className="m">
            <h1 className="font-bold text-xl">50</h1>
            <p>references</p>
          </div>
          <div className="r">
            <h1 className="font-bold text-xl">105</h1>
            <p>works</p>
          </div>
        </div>

        

        <div className="social flex justify-center text-2xl text-white space-x-8 mt-5">
          <motion.div
                    whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className="facebook p-3 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl cursor-pointer"><BsFacebook/></motion.div>
          <motion.div
                    whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className="twitter p-3 bg-gradient-to-r from-sky-500 to-indigo-500  rounded-2xl cursor-pointer"><BsTwitter/></motion.div>
          <motion.div
                    whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className="instagram p-3 bg-gradient-to-r from-purple-500 to-pink-500  rounded-2xl cursor-pointer"><BsInstagram/></motion.div>
          <motion.div
                    whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className="line p-3  rounded-2xl bg-gradient-to-r from-green-500 to-green-800 cursor-pointer"><BsLine/></motion.div>
          <motion.div
                    whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className="github p-3  rounded-2xl bg-gradient-to-r from-zinc-500 to-zinc-800 cursor-pointer"><BsGithub/></motion.div>
        </div>

        <div className="btn flex justify-center space-x-5 mt-8">
          <motion.div
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          href="" className="bg-blue-500 w-40 text-center py-3 rounded-3xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:ring-2 hover:ring-cyan-400">Send Message</motion.div>
          <motion.div
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          href="" className="bg-blue-500 w-40 text-center py-3 rounded-3xl text-white bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-400">Follow Me</motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
