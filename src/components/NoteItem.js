import React from 'react'
import './NoteItem.style.scss'

const NoteItem = ({ title, content, onItemClicked }) => {
    return (
        <div className="NoteItem_container"
            role="button"
            onClick={onItemClicked}
        >
            <div style={{maxWidth:'90%'}} >

            <h2 className="txt" >{title}</h2>
            <p className="txt" >  {content} </p> 
            </div>
        </div>
    )
}

export default NoteItem