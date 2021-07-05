import React from 'react'
import classes from './Contact.module.sass'

const Contact = () => {

    return <div>
                <br/>
                <ul class={`list-group list-group-flush ${classes.detail}`}>
                    <li class="list-group-item"><span>Address:</span> Schwalbenstr. 1, 72119 Ammerbuch, Germany</li>
                    <li class="list-group-item"><span>Phone:</span> +49151 18637425</li>
                    <li class="list-group-item"><span>Mail:</span>  robert.schmidt89(at)gmx.de</li>
                </ul>
            </div>
}

export default Contact