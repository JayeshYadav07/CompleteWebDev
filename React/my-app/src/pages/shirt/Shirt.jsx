import React from 'react'
import data from '../../data'
import CardComponents from '../../components/card/CardComponents'
export default function Shirt() {
  let filterPantsData = data.filter(ele => ele.type === "shirt")
  return (
    <CardComponents info={filterPantsData} />
  )
}
