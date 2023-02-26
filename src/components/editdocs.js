import React from "react";
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function EditDocs(){
    let params= useParams();
    console.log(params);
    const [docsDesc, setDocsDesc] = useState('');
    const getQuillData = () => {
        
    }
    return (
        <div>
            <h1>EditDocs Page</h1>

            <ReactQuill />
        </div>
    )
}