import React,{Component , useEffect , useState} from 'react'
import { Spinner , Skeleton, Box, SkeletonCircle, SkeletonText} from '@chakra-ui/react'
import "../Fortnite news/Ftnews.css"
import { motion } from "framer-motion"


function Apex() {
  useEffect(() => {
    setIsLoading(true)
    fetchNews()
  },[])


  const [val , setVal] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const fetchNews = async() => {


    //const data = await fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get")
    const data = await fetch("https://api.mozambiquehe.re/news?lang=en-us&auth=c3vfLhXjX4WxMXMiPGOE")
    const newss =  await data.json()
    setIsLoading(false);

    console.log(newss)

    const len2 = newss.length
    const val = []
    for(let i = 0;i < len2;i++){
          val.push({
            imgs : newss[i].img, 
            title : newss[i].title,  
            message : newss[i].short_desc,
            lien : newss[i].link,
        })
    }
    
    setVal(val)
    console.log(val)
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
       <div className='Br2'>
          <span className='News_br_title'><h1>News Apex</h1></span>
        {val.map((news , key) => 
            <>
            {isLoading  ? ( <Spinner />  ):( 
              <div>
                <div className='news' >
                  <span className='overlay'></span>
                  <img src={news.imgs} alt="" key={key}/>
                  <p className='title'>{news.title}<br/>
                    <p className='message'>{news.message}</p>
                  </p>
                  </div> 
                  <span className='more'>
                    <a href={news.lien}>voir plus</a>
                  </span>
              </div>
                     
              )}
            </>
        )}
    </div>
    </motion.div>
  )
}

export default Apex