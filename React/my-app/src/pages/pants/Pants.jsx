import React from 'react'
import data from '../../data'
import CardComponents from '../../components/card/CardComponents'
export default function Pants() {
    let filterPantsData = data.filter(ele => ele.type === "pants")
    return (
        <CardComponents info={filterPantsData} />
    )
}
