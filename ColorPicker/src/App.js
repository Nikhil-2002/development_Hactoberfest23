import './App.css';
import ColorPicker from './components/ColorPicker';

function App() {
  return (
    <div>
      <ColorPicker colorArray = {["red", "chartreuse", "blue", "yellow", "fuchsia", "cyan", "orange", "purple", "pink", "green", "coral", "lightskyblue", "brown", "orangered", "teal", "gold"]}/>
    </div>
  );
}

export default App;
