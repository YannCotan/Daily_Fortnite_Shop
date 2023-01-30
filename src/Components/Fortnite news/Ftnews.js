import React,{Component , useEffect , useState} from 'react'
import { Spinner , Box, SkeletonCircle, SkeletonText} from '@chakra-ui/react'
import { motion } from "framer-motion"
import Fortnite from '../Fortnite/Fortnite'
import Ftnsvnews from './Ftnews sv/Ftnsvnews'

import "./Ftnews.css"

function Ftnews() {
    useEffect(() => {
        setIsLoading(true)
        fetchNews()
      },[])

      const [val , setVal] = useState([])
      const [Date , setDate] = useState([])
      const [isLoading, setIsLoading] = useState(false);
      const fetchNews = async() => {

    
        //const data = await fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get")
        const data = await fetch("https://fortnite-api.com/v2/news")
        const newss =  await data.json()
        setIsLoading(false);

        const Date = newss.data.br.date
        console.log(newss)
        const Banner = newss.data.br.motds
        console.log(newss)
        const len2 = Banner.length
        const val = []
        for(let i = 0;i < len2;i++){
              val.push({
                imgs : Banner[i].image, 
                title : Banner[i].title,  
                message : Banner[i].body,
            })
        }
        
        setVal(val)
        setDate(Date)
        console.log(val)
    }
  return (
    <div className='Br'>
      <span className='News_br_title'><h1>News BR</h1></span>
        {val.map((news , key) => 
            <>
            {isLoading  ? ( <Spinner/>  ):( 
              <div>
                <div className='news' >
                    <span className='overlay'></span>
                  <img src={news.imgs} alt="" key={key}/>
                  <p className='title'>{news.title}<br/>
                    <p className='message'>{news.message}</p>
                  </p>
                </div>
                  <span className='more'>
                  <p>voir plus</p>
                  </span>
              </div>
              )}
            </>
        )}
        <Ftnsvnews/>
    </div>
  )
}

export default Ftnews