const productsFields = [
    {
        field: 'id',
        name: 'Product ID',
        type: 'text',
        description: '',
        placeholder: '',
        inTable: true,
        inForm: true,
        editable: true,
        disabled: false,
        sortable: true,
        required: true,
        defaultValue: '',
    },
    {
        field: 'name',
        name: 'Naziv',
        type: 'text',
        inTable: true,
        inForm: true,
        editable: true,
        disabled: false,
        sortable: true,
        required: true,
        defaultValue: '',
    },
    {
        field: 'sku',
        name: 'SKU',
        type: 'text',
        inTable: true,
        inForm: true,
        editable: true,
        disabled: false,
        sortable: true,
        required: true,
        defaultValue: '',
    },
    {
        field: 'checkbox',
        name: 'checkbox',
        type: 'checkbox',
        inTable: true,
        inForm: true,
        editable: true,
        disabled: false,
        sortable: true,
        required: true,
        defaultValue: false,
    },
    {
        field: 'textarea',
        name: 'textarea',
        type: 'textarea',
        inTable: true,
        inForm: true,
        editable: true,
        disabled: false,
        sortable: true,
        required: true,
        defaultValue: '',
    },
]

export default productsFields
