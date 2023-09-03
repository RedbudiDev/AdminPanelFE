import { Table } from 'components/ui'
import PageWrapper from '../PageWrapper/PageWrapper'
import Th from 'components/ui/Table/Th'
import THead from 'components/ui/Table/THead'
import Tr from 'components/ui/Table/Tr'
import TBody from 'components/ui/Table/TBody'
import Td from 'components/ui/Table/Td'
import { useNavigate } from 'react-router-dom'

const TablePage = ({ title, fields = [], values = [], ...props }) => {
    const navigate = useNavigate()
    return (
        <PageWrapper title={title} {...props}>
            <Table>
                <THead>
                    <Tr>
                        {fields.map((item) => (
                            <Th key={item.field}>{item.name}</Th>
                        ))}
                    </Tr>
                </THead>
                <TBody>
                    {values.map((row) => (
                        <Tr key={row.id}>
                            {fields.map((item) => {
                                let field = item.field
                                return (
                                    <Td
                                        key={field}
                                        onClick={() => {
                                            navigate(`${row.id}`)
                                        }}
                                    >
                                        {row[field]}
                                    </Td>
                                )
                            })}
                        </Tr>
                    ))}
                </TBody>
            </Table>
        </PageWrapper>
    )
}

export default TablePage
