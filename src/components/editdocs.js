import React from "react";
import { useParams } from 'react-router-dom';

export default function EditDocs(){
    let params= useParams();
    console.log(params);
    return (
        <div>EditDocs</div>
    )
}