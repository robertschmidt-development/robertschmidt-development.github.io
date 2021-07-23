import React from 'react'

const ServiceBeraterNeuerButton = props => {

    const {onAdd} = props

    return <button type="button" className="btn btn-success btn-block" onClick={onAdd}>New Worker</button>
}

export default ServiceBeraterNeuerButton
