import ReactDOM from 'react-dom/client'
import Home from './views/Home/Home'
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


