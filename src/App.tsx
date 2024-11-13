import { RouterProvider } from 'react-router-dom';
import { router } from './router/RouterApp';

const App = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default App;