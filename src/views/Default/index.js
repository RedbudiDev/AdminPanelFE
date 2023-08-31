import FormPage from 'components/layout/Pages/FormPage/FormPage'
import TablePage from 'components/layout/Pages/TablePage/TablePage'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ApiService from 'services/ApiService'

const DefaultPage = ({
    pageType = null,
    apiPath = '',
    title = '',
    fields = [],
}) => {
    const params = useParams()

    const [listData, setListData] = useState([])

    const [getData, setGetData] = useState()

    useEffect(() => {
        if (params.id) {
            const getHandler = async () => {
                if (params.id !== 'new') {
                    const data = await ApiService.fetchData({
                        url: `apiPath/${params.id}`,
                        method: 'get',
                    })

                    setGetData(data.data)
                }
            }

            getHandler()
        } else {
            const listHandler = async () => {
                const data = await ApiService.fetchData({
                    url: apiPath,
                    method: 'get',
                })

                setListData(data.data)
            }

            listHandler()
        }
    }, [])

    const createNew = (data) => {
        ApiService.fetchData({
            url: apiPath,
            method: 'post',
            data,
        })
    }

    const editData = (data) => {
        ApiService.fetchData({
            url: `apiPath/${params.id}`,
            method: 'put',
            data,
        })
    }

    const save = (data) => {
        if (params.id === 'new') {
            createNew(data)
        } else {
            editData(data)
        }
    }

    switch (pageType) {
        case 'table':
            return <TablePage title={title} fields={fields} values={listData} />
        case 'form':
            return (
                <FormPage
                    title={title}
                    fields={fields}
                    data={getData}
                    save={save}
                />
            )
        default:
            return null
    }
}

export default DefaultPage
