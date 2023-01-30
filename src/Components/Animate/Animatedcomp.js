import { motion } from "framer-motion"

const animation = {
    initial : {opacity : 0 , x: 100},
    animate : {opacity : 1 , x: 0},
    exit : {opacity : 0 , x: -100},
}

const Animatedcomp = ({children}) => {
  return (
    <motion.div
        variant={animation}
        initial = "initial"
        animate = "exit"
    >
        {children}
    </motion.div>
  )
}

export default Animatedcomp