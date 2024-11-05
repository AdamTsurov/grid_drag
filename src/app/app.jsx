import React, { useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Grid from '../features/Grid/Grid.jsx';
import './app.scss';
import PopupWindow from '../components/PopupWindow/PopupWindow.jsx';
import Input from '../components/Input/Input.jsx';
import Button from '../components/Button/Button.jsx';

function App() {
  const [gridSize, setGridSize] = useState({ rows: 10, cols: 10 });
  const rowSizeInputRef = useRef(null);
  const columnSizeInputRef = useRef(null);

  const [items, setItems] = useState([]);

  const changeSizeGrid = () => {
    const rowSizeInput = rowSizeInputRef.current.value;
    const columnSizeInput = columnSizeInputRef.current.value;

    setGridSize({
      rows: rowSizeInput ? Number(rowSizeInput) : gridSize.rows + 1,
      cols: columnSizeInput ? Number(columnSizeInput) : gridSize.cols + 1,
    });
  };

  const addItems = () => {
    const newItem = { id: items?.length, x: 1, y: 1 };
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <PopupWindow>
          <div className="inputs_change">
            Rows Size:{' '}
            <Input ref={rowSizeInputRef} className="input_row_size" />
            Colums Size:{' '}
            <Input ref={columnSizeInputRef} className="input_column_size" />
          </div>
        </PopupWindow>
        <Button onClick={changeSizeGrid}>Add Row and Column</Button>
        {gridSize.rows + ' ' + gridSize.cols}
        <Button onClick={addItems}>Add Element</Button>
        <Grid
          rows={gridSize.rows}
          cols={gridSize.cols}
          items={items}
          setItems={setItems}
        />
      </div>
    </DndProvider>
  );
}

export default App;
