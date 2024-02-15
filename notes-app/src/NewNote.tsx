import React from 'react'
import NoteForm from './NoteForm'
import { NoteData } from './App'

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
}

const NewNote = ({onSubmit}: NewNoteProps) => {
  return (
    <>
    <h1 className="mb-5">NewNote</h1>
    <NoteForm onSubmit={onSubmit} />
    </>
  )
}

export default NewNote