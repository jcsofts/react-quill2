import 'highlight.js/styles/github.css';
import Quill, { QuillOptions } from 'quill';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { ReactQuillProps } from '../types';
import hljs from 'highlight.js';

interface ReactQuillRef {
  getEditor: () => Quill | null;
}

const ReactQuill = forwardRef<ReactQuillRef, ReactQuillProps>(({
  value,
  defaultValue,
  onChange,
  options = {},
  readOnly = false,
  placeholder,
  theme = 'snow',
  modules,
  formats,
  style,
  className,
}, ref) => {
  const quillRef = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<Quill | null>(null);

  useEffect(() => {
    if (!quillRef.current) return;

    // Clean up previous instance
    if (quillInstance.current) {
      quillInstance.current = null;
    }

    const defaultOptions: QuillOptions = {
      theme,
      modules: {
        ...(modules || {}),
        ...(modules?.syntax ? { syntax: { hljs } } : {}),
        toolbar: modules?.toolbar || {container:"#quill-toolbar"},
      },
      formats: formats || [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'list', 'indent',
        'link', 'image', 'video', 'align', 'direction',
        'script'
      ],
      placeholder,
      readOnly,
      ...options,
    };

    quillInstance.current = new Quill(quillRef.current, defaultOptions);

    if (defaultValue) {
      quillInstance.current.root.innerHTML = defaultValue;
    }

    if (value) {
      quillInstance.current.root.innerHTML = value;
    }

    if (onChange) {
      quillInstance.current.on('text-change', () => {
        onChange(quillInstance.current?.root.innerHTML || '');
      });
    }

    return () => {
      if (quillInstance.current) {
        quillInstance.current = null;
      }
    };
  }, []); // Empty dependency array since we want to initialize only once

  useEffect(() => {
    if (quillInstance.current && value !== undefined) {
      const currentContent = quillInstance.current.root.innerHTML;
      if (value !== currentContent) {
        quillInstance.current.root.innerHTML = value;
      }
    }
  }, [value]);

  useImperativeHandle(ref, () => ({
    getEditor: () => quillInstance.current
  }));

  return (
    <>
      {!modules?.toolbar && (
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
      )}
      <div
        ref={quillRef}
        style={style}
        className={className}
      />
    </>
  );
});

ReactQuill.displayName = 'ReactQuill';

export default ReactQuill; 