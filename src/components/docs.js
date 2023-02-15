import React, { useState } from "react";
import Modal from "./modal";

export default function Docs({database}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <div class="docs-main">
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
            />
        </div>
    );
}