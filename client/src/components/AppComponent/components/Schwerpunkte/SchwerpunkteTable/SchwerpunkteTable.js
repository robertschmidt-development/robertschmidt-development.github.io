import React from 'react'
import SortingArrow from '../../UseSortableData/SortingArrow'
import SchwerpunkteRow from './SchwerpunkteRow/SchwerpunkteRow'
import classes from './SchwerpunkteTable.module.css'

const SchwerpunkteTable = props => {

    const {requestSearch, requestSort, items, onEdit, onDelete} = props

    return  <>
                <br />
                <input className="form-control" placeholder='Suche' onChange={e => requestSearch(e.target.value)}/>
                <br />
                <div className="table-responsive-lg">
                    <table className="table">
                        <thead>
                            <tr>
                                <th onClick={() => requestSort('todo')} className={classes.thPointer}>What <SortingArrow /></th>
                                <th style={{width:'15%'}} onClick={() => requestSort('baureihen')} className={classes.thPointer}>Build <SortingArrow /></th>
                                <th onClick={() => requestSort('baujahre')} className={classes.thPointer}>Years <SortingArrow /></th>
                                <th onClick={() => requestSort('bemerkung')} className={classes.thPointer}>Notice <SortingArrow /></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items && items.map((el, index) => <SchwerpunkteRow key={index} row={el} onEdit={onEdit} onDelete={onDelete}/>)}
                        </tbody>
                    </table>
                </div>
            </>
    
}

export default SchwerpunkteTable
