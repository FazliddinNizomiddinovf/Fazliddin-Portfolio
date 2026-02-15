import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pgs/Home'
import About from './components/pgs/About'
import Projects from './components/pgs/Projects'
import Notfound from './components/Notfound'
import IntroLoader from './components/IntroLoader'
import Aloqa from './components/pgs/Aloqa'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Navbar/>,
      children:[
        { path: '/', element: <Home/> },
        { path: '/about', element: <About/> },
        { path: '/projects', element: <Projects/> },
        { path: 'contact', element: <Aloqa/>},
        { path: '*', element: <Notfound/>}
        ]
    },
  ])
  return (
    <div className='container'>
      <IntroLoader/>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
