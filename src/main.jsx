import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navigate } from 'react-router-dom'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Experience from './components/Experience/Experience.jsx'
import Contact from './components/Contact/Contact.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Navigate to="/home" replace />} /> 
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/contact' element={<Contact />} />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
