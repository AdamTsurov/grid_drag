import React from 'react';
import { useDrag } from 'react-dnd';
import './GridItem.scss';

const ItemType = 'GRID_ITEM';

function GridItem({ id, x, y, cellSize, gap}) {
  const [{ isDragging }, dragRef] = useDrag({
    type: ItemType,
    item: { id, x, y },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef}
      className="grid-item"
      style={{
        position: 'absolute',
        width: `${cellSize * 2 + 5}px`,   
        height: `${cellSize * 2 + 5}px`,  
        left: `${x * (cellSize + gap)}px`,
        top: `${y * (cellSize + gap)}px`, 
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: 'lightblue',
        border: '1px solid #000',
      }}
    >
      Элемент {id}
    </div>
  );
}

export default GridItem;
