import { QuillOptions } from 'quill';

export interface ReactQuillProps {
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