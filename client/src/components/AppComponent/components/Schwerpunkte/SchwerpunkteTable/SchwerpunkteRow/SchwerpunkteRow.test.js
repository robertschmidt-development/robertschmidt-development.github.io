import React from 'react'
import SchwerpunkteRow from './SchwerpunkteRow'
import {render, cleanup} from '@testing-library/react'

import renderer from 'react-test-renderer'

afterEach(cleanup)

// it('renders without crashing', () => {
//     const div = document.createElement('div')
//     const row = {todo: 'todo', baureihen: 'baureihen', baujahre: 'baujahre', bemerkung: 'bemerkung'}
//     const {getByTestId} = render(<SchwerpunkteRow row={row}/>, div)
//     expect(getByTestId('id')).toHaveContent('dxd')
// })

it('matches snapshot', () => {
    const row = {todo: 'todo', baureihen: 'baureihen', baujahre: 'baujahre', bemerkung: 'bemerkung'}
    const tree = renderer.create(<SchwerpunkteRow row={row}/>).toJSON()
    expect(tree).toMatchSnapshot()
})

it('matches snapshot 2', () => {
    const row = {todo: 'a', baureihen: 'b', baujahre: 'c', bemerkung: 'd'}
    const tree = renderer.create(<SchwerpunkteRow row={row}/>).toJSON()
    expect(tree).toMatchSnapshot()
})
