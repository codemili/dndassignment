import logo from './logo.svg';
import './App.css';
import DraggableItem from './Components/DraggableItem';
import DroppableSidebar from './Components/DroppableSidebar';
import DropdownMenu from './Components/DropdownMenu';
import InputField from './Components/InputField';

const droppableStyle = {
  backgroundColor: '#555',
  width: '20%',
  padding: '20px',
  height: '400px',
}

function App() {
  return (
    <div className="wrapper">
      <DroppableSidebar id="dnd1" style={droppableStyle}>
        <DraggableItem id="item1">
          <div className="item">
            <DropdownMenu />
          </div>
        </DraggableItem>
        <DraggableItem id="item2">
          <div className="item">
            <InputField />
          </div>
        </DraggableItem>
        <DraggableItem id="item2">
          <div className="item">
            <button onClick={() => alert('You clicked')}>Click Me</button>
          </div>
        </DraggableItem>
      </DroppableSidebar>
      <div className="mainContent">
        <h6>This is main content area</h6>
      </div>
      <DroppableSidebar id="dnd1" style={droppableStyle}></DroppableSidebar>
    </div>
  );
}

export default App;
