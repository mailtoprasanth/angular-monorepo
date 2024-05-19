import { useState } from 'react';
import Header from '../components/Header';
import NotesList from '../components/NotesList';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link, Router } from 'react-router-dom';
import { notes } from '../models/common.model';
import CreateNotes from '../components/CreateNotes';

export function App() {
  const [notes, setNotes] = useState<notes[]>([]);
  return (
  <div>
    <Header/>
    <NotesList notes={notes} setNotes={setNotes}/>
    <CreateNotes notes={notes} setNotes={setNotes}/>
  </div>
  );
}

export default App;
