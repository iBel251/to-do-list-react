import React from "react"
import TodoContainer from "./components/TodoContainer"
import { createRoot } from 'react-dom/client';
import "./App.css"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TodoContainer />)