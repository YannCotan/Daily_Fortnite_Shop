import React , {Component} from 'react'
import Fortnite from '../Fortnite/Fortnite'
import Ftnews from '../Fortnite news/Ftnews'
import Apex from '../Apex/Apex'
import { motion } from "framer-motion"
import './Home.css'

function Home() {
  const pageTransform = {
    initial : {
      opacity: 0,
      x : '-100vw',
      scale : 0.8
    },
    in : {
      opacity: 1,
      x : 0,
      scale : 1
    },
    out : {
      opacity: 0,
      x : '100vw',
      scale : 1.2
    }

  }
  const pageTransition = {
    type : "tween",
    transition : "anticipate",
    duration : 0.3
  }
  return (
    <motion.div 
    initial = "initial"
    animate = "in"
    exit = "out"
    variants={pageTransform}
    transition={pageTransition}
    className='Container'>
      <Ftnews/>
    </motion.div>
  )
}

export default Home