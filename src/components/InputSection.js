import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import noteAction from '../redux/actions/noteActions'
import inputActions from '../redux/actions/inputActions'
import './InputSection.style.scss'

const InputSection = () => {

    const id = useSelector(state => state.inputs.id)
    const title = useSelector(state => state.inputs.title)
    const content = useSelector(state => state.inputs.content)
    const dispatch = useDispatch()

    const addNote = () => {
        if(title && content) {
            dispatch(noteAction.addNote({
                title,
                content
            }))
    
            dispatch(inputActions.resetInput())
        }
    }

    const updateNote = () => {
        if(title && content) {
            dispatch(noteAction.updateNote(id, {
                title, content
            }))
            dispatch(inputActions.resetInput())
        }
    }

    const deleteNote = () => {
        dispatch(noteAction.deleteNote(id))
        dispatch(inputActions.resetInput())


    }



    return (
        <div className="InputSection_container" >
            <input 
            type="text" 
            placeholder="Nome da Anotação"
            value={title}
            onChange={e => 
                dispatch(inputActions.setInputTitle(e.target.value)) 
            }
            />
            <textarea 
                placeholder="Contexto da Anotação"
                value={content}
                onChange={e => 
                dispatch(inputActions.setInputContent(e.target.value)) 
            } >

            </textarea>
           <div
            className="InputSection_container_btnWrapper" 
            >
            <button onClick={ id === -1 ? addNote : updateNote } >
                { id === -1 ? "ADICIONAR ANOTAÇÃO" : "ALTERAR ANOTAÇÃO" }
                </button>
            { id !== -1 && 
            <button
                onClick={deleteNote}
                style={{ marginLeft: '1em', backgroundColor: 'red' }}
            >
                EXCLUIR ANOTAÇÃO    
            </button>
            }

           </div>
        </div>
    )
}

export default InputSection