import Form from 'components/shared/Form/Form'
import PageWrapper from '../PageWrapper/PageWrapper'

const FormPage = ({
    title = '',
    fields = [],
    data = {},
    save = () => null,
}) => {
    return (
        <PageWrapper title={title}>
            <Form fields={fields} data={data} save={save} />
        </PageWrapper>
    )
}

export default FormPage
