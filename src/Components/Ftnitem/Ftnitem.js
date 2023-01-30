import React,{  useEffect , useState} from 'react'
import { Spinner , Skeleton, Box, SkeletonCircle, SkeletonText} from '@chakra-ui/react'
import {useParams} from 'react-router-dom'
import './Ftnitem.css'

function Ftnitem() {
    useEffect(() => {
        fetchItem()
      },[])
      const {id} =  useParams()

    const [item ,  setItem] = useState([])
    const [img ,  setImg] = useState([])
    const [intro ,  setIntro] = useState([])
    const [history ,  setHistory] = useState([])
    const [set ,  setSet] = useState([])
      


      const fetchItem = async () => {
          const data = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${id}`)
          const ite = await data.json()
          const item = ite.data
          const img = ite.data.images.featured
          const intro = ite.data.introduction
          const history = ite.data.shopHistory.length
          const set = ite.data.set

          setItem(item)
          setImg(img)
          setIntro(intro)
          setHistory(history)
          setSet(set)
        }

console.log(item)
  return (
    <div className="Items">
      <span className="img">
       <img src={img} alt=""/>
      </span>
      <div className="info-wrapper">
        <span className="info">
          <label>name :</label><h3>{item.name}</h3>
        </span>
        <span className="info">
          <label>{intro.text}</label>
        </span>
        <span className="info2">
          <h4>{item.description}</h4>
        </span>
        {set ? (<span className="info3"><label>{set.text}</label></span>):(
          <span className="info"><label>This item isn't a part of a set</label></span>
        )}
        <h5>This item has appared {history} times in the shop</h5>
      </div>
    </div>
  )
}

export default Ftnitem