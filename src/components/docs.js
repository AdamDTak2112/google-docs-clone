import React from "react";


export default function Docs(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <div class="docs-main">
            <h1>Docs Clone</h1>
            <button className="new-doc-button">
                Add New Document
            </button>
        </div>
    );
}