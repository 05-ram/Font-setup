import { RouterProvider } from 'react-router-dom';
import '../src/assets/stylesheets/abstracts/global.scss';
import "./assets/stylesheets/pages/styles.scss";
import RouterData from './routes';

function App() {
  const router = RouterData();
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
