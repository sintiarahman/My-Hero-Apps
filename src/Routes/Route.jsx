import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Install from '../Pages/Installations/Install';
import Error from '../Pages/Error/Error';
import AppDetails from '../Pages/AppDetails/AppDetails';
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement:<Error/>,
    children: [
      {index:true,Component:Home},
      {path:'/apps',Component:Apps},
      {path:'/installation',Component:Install},
      {path:'/appdetails/:id',Component:AppDetails},
    ]
  },
]);

export default router;
