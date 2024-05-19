import * as React from 'react';
import { Link } from 'react-router-dom';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="container">
      <div className="flex flex-row bg-slate-800 text-slate-200 p-4 gap-5">
        <div className=' bg-amber-800 px-2 py-1 rounded'>
          <Link to={'/'}>Home</Link>
        </div>

        <div className='bg-amber-800 px-2 py-1 rounded'>
     
          <Link to={'/'}>Movie</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
