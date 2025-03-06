# React Quill v2

A React component for Quill 2.0 rich text editor.

## Installation

```bash
npm install react-quill-ver2
# or
yarn add react-quill-ver2
# or
pnpm add react-quill-ver2
```

## Dependencies

This package requires the following peer dependencies:

```json
{
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "quill": "^2.0.0"
  }
}
```

## Usage

```tsx
import ReactQuill from 'react-quill-ver2';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'highlight.js/styles/github.css';

function App() {
  const [value, setValue] = useState('');

  return (
    <ReactQuill
      value={value}
      onChange={setValue}
      theme="snow"
      modules={{
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['link', 'image', 'video'],
          ['clean']
        ]
      }}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | The value of the editor |
| defaultValue | string | - | The default value of the editor |
| onChange | (content: string) => void | - | Callback when the editor content changes |
| options | QuillOptions | - | Quill editor options |
| readOnly | boolean | false | Whether the editor is read-only |
| placeholder | string | - | Placeholder text |
| theme | string | 'snow' | Editor theme ('snow' or 'bubble') |
| modules | QuillOptions['modules'] | - | Quill modules configuration |
| formats | string[] | - | Allowed formats |
| style | React.CSSProperties | - | Custom styles |
| className | string | - | Custom CSS class |

## Features

- Full Quill 2.0 support
- TypeScript support
- Syntax highlighting with highlight.js
- Emoji picker support
- Customizable toolbar
- Snow and Bubble themes
- Read-only mode
- Placeholder text
- Custom styling

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build

# Preview the build
npm run preview
```

## License

MIT 