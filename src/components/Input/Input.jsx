import React, { forwardRef, useState } from 'react';

const Input = forwardRef((props, ref) => {
  const [inputText, setinputText] = useState('');

  return (
    <input
      {...props}
      ref={ref}
      onChange={e => setinputText(e.target.value)}
      value={inputText}
      type="text"
    />
  );
});

export default Input;
