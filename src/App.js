
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers/Router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'aos/dist/aos.css';

function App() {
  return (<>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <RouterProvider router={router}></RouterProvider>
  </>
  );
}

export default App;
