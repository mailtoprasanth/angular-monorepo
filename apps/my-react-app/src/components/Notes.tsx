import * as React from 'react';
import { notes } from '../models/common.model';

interface INotesProps {
  note: notes;
  deleteHandler: (id:string) => void;
}

const Notes: React.FunctionComponent<INotesProps> = ({
  note,
  deleteHandler,
}) => {
  return (
    <div className="container">
      <div className="block mt-5 rounded-lg shadow-secondary-1text-surface" style={{backgroundColor: note.color}}>
        <h5 className="border-b-2 border-neutral-100 text-lg px-6 py-3">
          {note.title}
        </h5>
        <div className="p-6">
          <div className="mb-2 text-md leading-tight">
            {note.text}
          </div>
          <p className="mb-4 text-base italic">{note.date}</p>
          <button
            type="button"
            className="inline-block bg-red-500 text-slate-100 py-2 px-4 rounded-lg"
            onClick={() => deleteHandler(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
