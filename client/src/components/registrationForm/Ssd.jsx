import { useState } from 'react';

function Ssd() {
  const [value, setValue] = useState('');

  const handleReset = () => {
    setValue('');
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {value && (
        <button onClick={handleReset} style={{ position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)' }}>
          x
        </button>
      )}
    </div>
  );
}

export default Ssd