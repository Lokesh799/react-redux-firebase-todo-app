import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

