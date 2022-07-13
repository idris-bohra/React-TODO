import React from 'react'

export default function Card(props) {

    const removed= ()=>
    {
        props.remove(props.id);
    }

    
    return (
        <div className='container'>
            <div className="card">
                <div className="card-body">

                    <h5 className="card-title">{props.addtitles}</h5>

                    <p className="card-text">{props.adddescs}</p>

                    <button type="button" onClick={removed} class="btn btn-primary">Remove</button>
                    
                </div>
            </div>
        </div>
    )
}
