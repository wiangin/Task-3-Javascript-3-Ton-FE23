// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router} from 'react-router-dom';
import SearchComp from './provider/ProviderComponent.tsx';

createRoot(document.getElementById('root')!).render(
    <Router>
         <App />
    </Router>
   
)
