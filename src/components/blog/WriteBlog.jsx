import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const WriteBlog = () => {
    const [value, setValue] = useState('');

    return (
        <>
            <h1>Write</h1>
            <ReactQuill className='editor' value={value} theme='snow' onChange={setValue} />
        </>
    )
}