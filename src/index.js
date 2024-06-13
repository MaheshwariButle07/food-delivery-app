import ReactDOM from 'react-dom/client'
import Home from './views/Home/Home'
import About from './views/About/About'
import Services from './views/Services/Services'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Cardpage from './views/Cardpage/Cardpage'


const root = ReactDOM.createRoot(document.getElementById('root'))

const router= createBrowserRouter([
  {path:"/",
    element:<Home />
  },
  {
    path:"/Cardpage/:id",
    element:<Cardpage />
  }
])

root.render(<RouterProvider router={router}/>)


