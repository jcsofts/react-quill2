import { QuillOptions } from 'quill';

export interface ReactQuillProps {
  id?:string;
  value?: string;
  defaultValue?: string;
  onChange?: (content: string) => void;
  options?: QuillOptions;
  readOnly?: boolean;
  placeholder?: string;
  theme?: string;
  modules?: QuillOptions['modules'];
  formats?: string[];
  style?: React.CSSProperties;
  className?: string;
} 