import React, { useRef, useState } from 'react';
import GridItem from '../GridItem/GridItem';
import './Grid.scss';
import { useDrop } from 'react-dnd';


function Grid({ rows, cols, items, setItems }) {
  const gap = 5;
  const cellSize = Math.min(
    (1045 - gap * (cols - 1)) / cols,
    (1045 - gap * (rows - 1)) / rows,
  );

  const gridStyleCSS = {
    maxWidth: '1045px',
    maxHeight: '1045px',
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    gap: `${gap}px`,
  };


  const moveItem = (id, newX, newY) => {
    const constrainedX = Math.max(0, Math.min(newX, cols - 1));
    const constrainedY = Math.max(0, Math.min(newY, rows - 1));

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, x: constrainedX, y: constrainedY } : item,
      ),
    );
  };

  const [, dropRef] = useDrop({
    accept: 'GRID_ITEM',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const newX = Math.round(item.x + delta.x / cellSize);
      const newY = Math.round(item.y + delta.y / cellSize);

      moveItem(item.id, newX, newY);
    },
  });

  return (
    <div ref={dropRef} className="grid" style={gridStyleCSS}>
      {Array.from({ length: rows * cols }).map((_, index) => (
        <div key={index} style={{width: `${cellSize}px`, height: `${cellSize}px`}} className="grid-cell" />
      ))}
      {items?.map(item => (
        <GridItem
          key={item.id}
          id={item.id}
          x={item.x}
          y={item.y}
          cellSize={cellSize}
          gap={gap}
        />
      ))}
    </div>
  );
}

export default Grid;
