import React,{Component , useEffect , useState} from 'react'
import { Spinner , Box, SkeletonCircle, SkeletonText} from '@chakra-ui/react'
import { motion } from "framer-motion"
import "../Ftnews.css"

function Ftnsvnews() {
    useEffect(() => {
        fetchNewsv()
      },[])

      const [sval , setsVal] = useState([])
      const fetchNewsv = async() => {

    
        //const data = await fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get")
        const data = await fetch("https://fortnite-api.com/v2/news")
        const news =  await data.json()

        const Banner = news.data.stw.messages
        console.log(news)
        const len2 = Banner.length
        const sval = []
        for(let i = 0;i < len2;i++){
              sval.push({
                imgs : Banner[i].image, 
                title : Banner[i].title,  
                message : Banner[i].body
            })
        }
        
        setsVal(sval)
        console.log(sval)
    }
  return (
    <div className='cont'>
      <span className='News_br_title'><h1>News Save the world</h1></span>
      <div className='Br2'>
          {sval.map((newsv , key) => 
              <>
              <div>
                <div className='news' >
                    <span className='overlay'></span>
                  <img src={newsv.imgs} alt="" key={key}/>
                  <p className='title'>{newsv.title}<br/>
                    <p className='message'>{newsv.message}</p>
                  </p>
                </div>
                <span className='more'>
                      <p>voir plus</p>
                </span>
              </div>
              </>
            
          )}
          
      </div>
    </div>
  )
}

export default Ftnsvnews