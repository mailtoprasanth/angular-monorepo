import * as React from 'react';
import { notes } from '../models/common.model';
import Notes from './Notes';

interface INotesListProps {
  notes: notes[];
  setNotes: React.Dispatch<React.SetStateAction<notes[]>>;
}

const NotesList: React.FunctionComponent<INotesListProps> = ({
  notes,
  setNotes,
}) => {
  const deleteHandler = (id?: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const renderNotes = (): JSX.Element[] => {
    return notes.map((data) => {
      return <Notes key={data.id} note={data} deleteHandler={deleteHandler} />;
    });
  };
  return (
    <div className="container mx-auto bg-slate-50">
      <div className="text-neutral-950 text-xl flex justify-center p-3 font-medium">Notes</div>
      <div className="cards">{renderNotes()}</div>
    </div>
  );
};

export default NotesList;
