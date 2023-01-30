import React,{Component , useEffect , useState} from 'react'
import { Spinner , Skeleton, Box, SkeletonCircle, SkeletonText} from '@chakra-ui/react'
import './Fortnite.css'
import Features from './Features'
import SpecialFeatures from './SpecialFeatures'
import Ftnitem from '../Ftnitem/Ftnitem'
import { motion } from "framer-motion"
import {Link} from "react-router-dom"


function Fortnite() {
  useEffect(() => {
    setIsLoading(true)
    fetchItems()
  },[])



  const [arname ,  setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const fetchItems = async() => {

    
    //const data = await fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get")
    const data = await fetch("https://fortnite-api.com/v2/shop/br")
    const items =  await data.json()
    setIsLoading(false);
    const itemss = items.data.daily.entries
    const itemss2 = items.data.daily.entries

    const itemss3 = []
    const len3 = items.length 
    for(let x = 0;x < len3;x++){
      for(let y = 0;y < items[x].length;y++){
        itemss3.push(items.data.daily.entries.regularPrice[x][y])
      }
    }
    const len = itemss.length 
    const ar = []
    for(let i = 0;i < len;i++){
      ar.push(itemss[i].items)
    }
    const len2 = ar.length 
    const arname = []
    for(let i = 0;i < len2;i++){
      for(let j = 0;j < ar[i].length;j++){
        arname.push({
          nam : ar[i][j].name , 
          imgs : ar[i][j].images.icon , 
          featured_img : ar[i][j].images.featured , 
          raritiest: ar[i][j].rarity.value,
          id : ar[i][j].id  
      })
      
    }
  }
  setItems(arname)
  console.log(arname)

  }

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
     className="container">
    <div className='featured__titre'><h1>Daily items</h1></div>
      {arname.map((item , key) => 
      
         <>
         {isLoading  ? ( <div className='Spinn'><Spinner size='lg'/></div> ):( 
           
          <div key={item.id}
          className={item.raritiest}
          >
                <div className='Item__img' ><img src={item.imgs} alt="" /></div>
                <div className='Item__name'>
                  <Link to={`/FtnItem/${item.id}`}>
                    <h5>{item.nam}</h5>
                  </Link>
                </div>
          </div> 
         )}
             
         </>
      )}
      <Features/>
      <SpecialFeatures/>
    </motion.div>
    
  )
}


export default Fortnite