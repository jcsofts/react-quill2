import React, { useState } from 'react';
import { ReactQuill } from '../index';

const App: React.FC = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: {
      container: `#quill-toolbar`,
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    clipboard: {
      matchVisual: false,
    },
    syntax: true,
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Quill 2.0 Demo</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Editor:</h2>
        <div>
          <div id="quill-toolbar">
            <span className="ql-formats">
              <select className="ql-size" defaultValue="">
                <option value="small"></option>
                <option value=""></option>
                <option value="large"></option>
                <option value="huge"></option>
              </select>
            </span>
            <span className="ql-formats">
              <select className="ql-header" defaultValue="">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
                <option value=""></option>
              </select>
            </span>
            <span className="ql-formats">
              <button className="ql-bold"></button>
              <button className="ql-italic"></button>
              <button className="ql-underline"></button>
              <button className="ql-strike"></button>
            </span>
            <span className="ql-formats">
              <button className="ql-blockquote"></button>
              <button className="ql-code-block"></button>
            </span>
            <span className="ql-formats">
              <button className="ql-header" value="1"></button>
              <button className="ql-header" value="2"></button>
            </span>
            <span className="ql-formats">
              <button className="ql-list" value="ordered"></button>
              <button className="ql-list" value="bullet"></button>
              <button className="ql-list" value="check"></button>
            </span>
            <span className="ql-formats">
              <button className="ql-script" value="sub"></button>
              <button className="ql-script" value="super"></button>
            </span>
            <span className="ql-formats">
              <button className="ql-indent" value="-1"></button>
              <button className="ql-indent" value="+1"></button>
            </span>
            <span className="ql-formats">
              <button className="ql-direction" value="rtl"></button>
            </span>
            
            <span className="ql-formats">
              <select className="ql-color"></select>
              <select className="ql-background"></select>
            </span>
            <span className="ql-formats">
              <select className="ql-font"></select>
            </span>
            <span className="ql-formats">
              <select className="ql-align"></select>
            </span>
            <span className="ql-formats">
              <button className="ql-clean"></button>
            </span>
            <span className="ql-formats">
              <button className="ql-link"></button>
              <button className="ql-image"></button>
              <button className="ql-video"></button>
              <button className="ql-formula"></button>
            </span>
          </div>
          <ReactQuill
            value={value}
            onChange={setValue}
            modules={modules}
            placeholder="Start writing..."
            style={{ height: '300px', marginBottom: '50px' }}
          />
        </div>
        
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