"use client";

import { useState } from "react";

export default function DashboardPage(){
    const [name, setName] = useState("");
    return(
         <>
         <h1>Dashboard Page</h1>
         <input value={name} onChange={(e)=> setName(e.target.value)} />
         <p>Hi! I am {name}.</p>
         </>
    );
}