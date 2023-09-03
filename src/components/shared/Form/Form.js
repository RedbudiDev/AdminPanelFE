import { Button, FormContainer, FormItem } from 'components/ui'
import { useEffect, useState } from 'react'
import InputField from './InputFields'

const Form = ({ fields, data, save }) => {
    let defaultData = {}
    for (const field of fields) {
        defaultData[field.field] = field.defaultValue
    }
    const [formData, setFormData] = useState({ ...defaultData, ...data })

    useEffect(() => {
        setFormData((oldData) => {
            return { ...oldData, ...data }
        })
    }, [data])

    const [errors, setErrors] = useState({})

    const fieldChangeHandler = ({ target }) => {
        setFormData((oldData) => {
            return { ...oldData, [target.name]: target.value }
        })
    }

    const isEmptyField = (value, type) => {
        return value === '' || value == null
    }

    const submitHandler = (e) => {
        e.preventDefault()
        let newErrors = {}
        for (const field of fields) {
            if (field.required && isEmptyField(formData[field.field])) {
                newErrors[field.field] = 'Obavezno polje!'
            }
        }
        setErrors(newErrors)
        if (Object.keys(newErrors).length === 0) {
            save(formData)
        }
    }

    return (
        <div>
            <FormContainer>
                <form onSubmit={submitHandler} noValidate>
                    {fields
                        .filter((field) => field.inForm)
                        .map((field) => {
                            return (
                                <InputField
                                    key={field.field}
                                    inputType={field?.type}
                                    label={field?.name}
                                    description={field?.description}
                                    defaultValue={formData[field.field]}
                                    onChange={fieldChangeHandler}
                                    placeholder={field.placeholder}
                                    disabled={field.disabled}
                                    name={field.field}
                                    editable={field.editable}
                                    required={field.required}
                                    error={errors[field.field]}
                                />
                            )
                        })}
                    <FormItem>
                        <Button variant="solid" type="submit">
                            Submit
                        </Button>
                    </FormItem>
                </form>
            </FormContainer>
        </div>
    )
}

export default Form
