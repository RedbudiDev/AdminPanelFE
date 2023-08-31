import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const { id } = useParams()

    return <div>Proizvod id: {id}</div>
}

export default Product
