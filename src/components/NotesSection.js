import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NoteItem from './NoteItem'
import inputActions from '../redux/actions/inputActions' 
import './NotesSection.style.scss'

const NotesSection = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.notes)

    const onItemClicked = (item, index) => {
        dispatch(inputActions.setInputId(index))
        dispatch(inputActions.setInputTitle(item.title))
        dispatch(inputActions.setInputContent(item.content))
    }

    if(notes.length ===0 ){
        return (
            <div className="NotesSection_container_entrada" >
                <p>Ainda não há anotações. Por favor adicione uma.</p>
            </div>
        )
    }

    return (
        <div className="NotesSection_container" >
           {notes.map((item,index) =>  {
               if(item) {
                   return (
                    <NoteItem 
                        title={item.title}
                        content={item.content}
                        onItemClicked={()=> {
                        onItemClicked(item, index)
                    } }
                    />
                   )
               }
               return null
           })}
 
        </div>
    )
}

export default NotesSection