import React, { useEffect, useState, useRef } from "react";
import Modal from "./modal";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export default function Docs({database}){
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [title, setTitle] = useState('');
    const collectionRef = collection(database, 'docsData');
    const isMounted = useRef();
    const [docsData, setDocsData] = useState([]);
    const getID = (id) => {
        navigate(`/editDocs/${id}`);
    }
    const addData = () => {
        addDoc(collectionRef, {
            title: title,
        })
        .then(() => {
            alert("Data added");
        })
        .catch(() => {
            alert("Cannot add data");
        })
    };
    const getData = () => {
        onSnapshot(collectionRef, (data) => {
            setDocsData(data.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            }))
        })
    };
    useEffect(() => {
        if (isMounted.current){
            return;
        }
        isMounted.current = true;
        getData();
    }, []);
    return (
        <div className="docs-main">
            <h1>Docs Clone</h1>
            <button 
                className="new-doc-button"
                onClick={handleOpen} 
            >
                Add New Document
            </button>

            <div className="grid-main">
                
                {docsData.map((doc) => {
                    return (
                        <div className="grid-child" onClick={() => getID(doc.id)}>
                            <p key={doc.title}>{doc.title}</p>
                        </div>
                    )
                })}
                
            </div>

            <Modal
                open={open}
                setOpen={setOpen}
                title={title}
                setTitle={setTitle}
                addData={addData}
            />
        </div>
    );
}