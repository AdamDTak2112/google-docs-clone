import React, { useEffect, useState, useRef } from "react";
import Modal from "./modal";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

export default function Docs({database}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [title, setTitle] = useState('');
    const collectionRef = collection(database, 'docsData');
    const isMounted = useRef();
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
            console.log(data.docs.map((doc) => {
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