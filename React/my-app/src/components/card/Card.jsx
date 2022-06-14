import React from 'react'
import './Card.css'
import data from '../../data'
import CardComponents from './CardComponents'
export default function Card({ type }) {
  let newData = data.filter(ele => ele.type === type.toLowerCase())
  return newData.length !== 0 ? <CardComponents info={newData} /> : <CardComponents info={data}/>
}
