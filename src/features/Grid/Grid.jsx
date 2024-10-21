import React, { useState } from 'react';
import styles from "./Grid.module.scss";
import GridItem from '../GridItem/GridItem';

const itemsData = [
	{ id: 1, content: 'Item 1' },
  { id: 2, content: 'Item 2' },
];

const Grid = () => {
	const [items, setItems] = useState(itemsData);

	return (
		<div className={styles}>
			<GridItem/>
		</div>
	);
};

export default Grid;