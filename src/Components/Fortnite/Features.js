import React,{Component , useEffect , useState} from 'react'
import { Spinner } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import './Fortnite.css'

function Features() {
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
    const itemss = items.data.featured.entries
    console.log(itemss)
    const itemss2 = items.data.featured.entries

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
          raritiest: ar[i][j].rarity.value  ,
          id : ar[i][j].id  
      })
      
    }
  }
    setItems(arname)

  }
  
  return (
    <>
    <div className='featured__titre'><h1>featured items</h1></div>
      {arname.map((item , key) => 
        <>
         {isLoading  ? ( <div className='Spinn'><Spinner size='lg'/></div>  ):( 
         
          <div key={item.id} className={item.raritiest}>
                <div className='Item__img' ><img src={item.imgs} alt="" /></div>
              <Link to={`/FtnItem/${item.id}`}>
                <div className='Item__name'><h5>{item.nam}</h5></div>
              </Link>
          </div> 
         )}
             
        </>
      )}
    </>
    
  )
}

export default Features