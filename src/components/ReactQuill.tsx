import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Quill, { QuillOptions } from 'quill';
import 'quill/dist/quill.snow.css';
import { ReactQuillProps } from '../types';

interface ReactQuillRef {
  getEditor: () => Quill | null;
}

const ReactQuill = forwardRef<ReactQuillRef, ReactQuillProps>(({
  id="quill-editor",
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
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!quillRef.current) return;
    if (isInitialized.current) return;

    const defaultOptions: QuillOptions = {
      theme,
      modules: {
        ...(modules || {}),
        toolbar: modules?.toolbar || `#${id}`,
      },
      formats: formats || [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'list', 'bullet', 'indent',
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

    isInitialized.current = true;

    return () => {
      if (quillInstance.current) {
        quillInstance.current = null;
        isInitialized.current = false;
      }
    };
  }, [theme, modules, formats, placeholder, readOnly, options, id]);

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
      <div id={id}>
        <select className="ql-size">
          <option value="small"></option>
          <option selected></option>
          <option value="large"></option>
          <option value="huge"></option>
        </select>
        <button className="ql-bold"></button>
        <button className="ql-script" value="sub"></button>
        <button className="ql-script" value="super"></button>
      </div>
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