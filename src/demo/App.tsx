import React, { useState } from 'react';
import { ReactQuill } from '../index';

const App: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Quill 2.0 Demo</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Editor:</h2>
        <ReactQuill
          value={value}
          onChange={setValue}
          placeholder="Start writing..."
          style={{ height: '300px', marginBottom: '50px' }}
        />
      </div>
      <div>
        <h2>Output:</h2>
        <div
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            minHeight: '100px',
          }}
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
    </div>
  );
};

export default App; 