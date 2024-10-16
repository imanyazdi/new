import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Themppp } from "./Tamrin/Context/Themcontext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* for local information */}
        { <Themppp>
            <App />
        </Themppp> }
    </React.StrictMode>
);

