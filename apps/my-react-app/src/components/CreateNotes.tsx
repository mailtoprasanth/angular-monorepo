import * as React from 'react';
import { notes } from '../models/common.model';
import { useState } from 'react';

interface ICreateNotesProps {
  notes: notes[];
  setNotes: React.Dispatch<React.SetStateAction<notes[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  notes,
  setNotes,
}) => {
  const [error, setError] = useState('');
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLInputElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === '' || textRef.current?.value === '') {
      return setError('All Fields Are Mandatory');
    }

    setError('');
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLInputElement).value,
        date: new Date().toString(),
        color: (colorRef.current as HTMLInputElement).value,
      },
    ]);
    (titleRef.current as HTMLInputElement).value = '';
    (textRef.current as HTMLInputElement).value = '';
  };

  return (
    <div className="container flex justify-center mx-auto mt-3">
      <form className="w-full max-w-sm" onSubmit={(e) => submitHandler(e)}>
        {error && <div className="text-red-600 text-xl">{error}</div>}
        <div className="flex flex-col gap-8 justify-center items-center py-2">
          <input
            className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            ref={titleRef}
            placeholder="Title"
            aria-label="Title"
          />
          <input
            className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="textarea"
            ref={textRef}
            placeholder="Text"
            aria-label="Text"
          />
          <div className="flex align-baseline gap-1">
            <label className=" text-slate-400" htmlFor="color">
              color:
            </label>
            <input
              id="color"
              ref={colorRef}
              className="appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none"
              type="color"
              defaultValue={'#70E181'}
              placeholder="color"
              aria-label="Title"
            />
          </div>
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Take a note
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNotes;
