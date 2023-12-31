import { AiFillGithub, AiOutlineDownload } from 'react-icons/ai';
import { GrDocumentConfig } from 'react-icons/gr';

function Header({handleDownload}) {
  return (
    <div className='header-container'>
        <div className="header">
            <h1><GrDocumentConfig /> CV BUILDER</h1>
            <h3>
                By &nbsp;
                <a href="https://github.com/jiankh">
                <AiFillGithub />JIANKH
                </a>
            </h3>
        </div>
        <button onClick={handleDownload} className='download-btn'> <AiOutlineDownload /> Download</button>

    </div>
  )
}

export default Header