import classNames from 'classnames'
import { Button } from 'components/ui'
import { useNavigate } from 'react-router-dom'

const PageWrapper = ({ title = '', children = null }) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className={classNames('pageTitle')}>
                <h2>{title}</h2>
                <Button variant="solid" onClick={() => navigate(-1)}>
                    Back
                </Button>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default PageWrapper
