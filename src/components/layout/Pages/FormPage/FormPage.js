import { useState } from 'react'

const FormPage = ({
    title = '',
    fields = [],
    data = {},
    save = () => null,
}) => {
    const [formData, setFormData] = useState(data)

    const fieldChangeHandler = ({ target }) => {
        setFormData((oldData) => {
            return { ...oldData, [target.name]: target.value }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        save(formData)
    }

    return (
        <div>
            <h3>{title}</h3>
            <form onSubmit={submitHandler}>
                {fields
                    .filter((field) => field.inForm)
                    .map((field) => {
                        return (
                            <div key={field.field}>
                                <label htmlFor={field.field}>
                                    {field.name}
                                </label>
                                <br />
                                <input
                                    id={field.field}
                                    name={field.field}
                                    type="text"
                                    defaultValue={formData[field.field]}
                                    onChange={fieldChangeHandler}
                                />
                                <br />
                            </div>
                        )
                    })}
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default FormPage
