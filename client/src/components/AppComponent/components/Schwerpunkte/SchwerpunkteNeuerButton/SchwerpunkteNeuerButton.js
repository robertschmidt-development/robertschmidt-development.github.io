import React from 'react'

const SchwerpunkteNeuerButton = props => {

    const {onAdd} = props

    return <button type="button" className="btn btn-success btn-block" onClick={onAdd}>New Job-Detail</button>
}

export default SchwerpunkteNeuerButton
