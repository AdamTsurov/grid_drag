import React from 'react';
import './PopupWindow.scss'

const PopupWindow = ({children}) => {
  return (
    <div className='popup'>
      {children}
    </div>
  );
};

export default PopupWindow;