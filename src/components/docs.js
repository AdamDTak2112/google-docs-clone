import React, { useEffect, useState, useRef } from "react";
import Modal from "./modal";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

export default function Docs({database}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [title, setTitle] = useState('');
    const collectionRef = collection(database, 'docsData');
    const isMounted = useRef();
    const [docsData, setDocsData] = useState([]);
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
                <ul className="list-of-docs">
                {docsData.map((doc) => {
                    return (
                        <div className="grid-child">
                            <li key={doc.title}>{doc.title}</li>
                        </div>
                    )
                })}
                </ul>
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