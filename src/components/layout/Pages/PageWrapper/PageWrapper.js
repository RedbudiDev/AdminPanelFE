import classNames from 'classnames'
import { Button } from 'components/ui'
import { useNavigate } from 'react-router-dom'

const PageWrapper = ({ title = '', children = null, newButton = false }) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className={classNames('pageTitle')}>
                <h2>{title}</h2>
                <div className={classNames('pageButtons')}>
                    {newButton && (
                        <Button variant="solid" onClick={() => navigate('new')}>
                            New
                        </Button>
                    )}
                    <Button variant="solid" onClick={() => navigate(-1)}>
                        Back
                    </Button>
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default PageWrapper
