import TablePage from 'components/layout/Pages/TablePage/TablePage'
import React, { useEffect } from 'react'
import fields from '../../configs/pages.config/products.json'
import { useNavigate } from 'react-router-dom'

//remove after api connection
import mock from '../../mock/data/productsData.json'

const Products = () => {
    /*Na ovom nivou se povlace podaci i prosledjuju u komponente */

    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    const getData = async () => {
        // handler za uzimanje podataka
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <TablePage
            title="Proizvodi"
            fields={fields}
            back={back}
            values={mock}
        />
    )
}

export default Products
