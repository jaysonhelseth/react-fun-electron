import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Temp } from './temp.jsx';


document.documentElement.setAttribute("data-bs-theme", "dark")
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <div className='container-fluid'>
    <Temp />
    </div>
);