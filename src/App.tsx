
import './App.css';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { ButtonChange } from './components/ButtonChange';

function App() {
  return (
    <div className="container">
      <Page1/>
      <Page2 />
      <ButtonChange/>
    </div>
  );
}

export default App;
