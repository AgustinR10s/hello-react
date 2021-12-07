import React from 'react';
import Note from './Note';

const NotesList = ({ notes, removeNote, updateNote }) => {
  console.log(notes);
  // render JSX
  return (
    <div className="card-columns">
      {notes.map((note) => (
        <Note
          updatedAt={note.updatedAt}
          id={note._id}
          key={note._id}
          initialTitle={note.title}
          initialText={note.text}
          removeNote={removeNote}
          updateNote={updateNote}
        />
      ))}
    </div>
  );
};

export default NotesList;
