import { Checkbox, FormItem, Input } from 'components/ui'

const InputWrapper = ({ children, label, description, error }) => {
    return (
        <FormItem label={label} description={description} errorMessage={error}>
            {children}
        </FormItem>
    )
}

const InputField = ({
    inputType = 'text',
    label = '',
    description = '',
    defaultValue = '',
    onChange = () => null,
    placeholder = '',
    disabled = false,
    name = '',
    editable = true,
    required = false,
    error = null,
}) => {
    let field = null

    switch (inputType) {
        case 'text':
            field = (
                <Input
                    defaultValue={defaultValue}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    name={name}
                    required={required}
                    autoComplete="off"
                    invalid={error != null}
                />
            )
            break
        case 'checkbox':
            field = (
                <Checkbox
                    defaultValue={defaultValue}
                    onChange={(value) => onChange({ target: { name, value } })}
                    disabled={disabled}
                    name={name}
                    required={required}
                    autoComplete="off"
                />
            )
            break
        case 'textarea':
            field = (
                <Input
                    defaultValue={defaultValue}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    name={name}
                    required={required}
                    autoComplete="off"
                    textArea
                    invalid={error != null}
                />
            )
            break
        default:
            break
    }

    return (
        <InputWrapper label={label} description={description} error={error}>
            {field}
        </InputWrapper>
    )
}

export default InputField
