import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {updateDoc, 
        collection,
        doc
        } from 'firebase/firestore';
import { database } from "../firebaseConfig";

export default function EditDocs(){
    let params= useParams();
    const collectionRef = collection(database, 'docsData');
    const [docsDesc, setDocsDesc] = useState('');
    const getQuillData = (value) => {
        setDocsDesc(value);
    }
    useEffect(() => { 
        const updateDocsData = setTimeout(() => {
            const document = doc(collectionRef, params.id)
            updateDoc(document, {

            })
        }, 1000);
        return () => clearTimeout(updateDocsData);
    }, [])
        
    return (
        <div>
            <h1>EditDocs Page</h1>

            <ReactQuill
                value={docsDesc}
                onChange={getQuillData} 
            />
        </div>
    )
}