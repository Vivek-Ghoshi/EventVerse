import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
     <BrowserRouter>
       <App />
     </BrowserRouter>
    </AuthProvider>
)
