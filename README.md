# React Quill 2.0

A React wrapper for Quill 2.0 rich text editor.

## Installation

```bash
npm install react-quill-ver2
# or
yarn add react-quill-ver2
```

## Usage

```tsx
import { ReactQuill } from 'react-quill-ver2';
import 'quill/dist/quill.snow.css';

function App() {
  const [value, setValue] = useState('');

  return (
    <ReactQuill
      value={value}
      onChange={setValue}
      placeholder="Start writing..."
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
| options | QuillOptionsStatic | {} | Quill editor options |
| readOnly | boolean | false | Whether the editor is read-only |
| placeholder | string | - | Placeholder text |
| theme | string | 'snow' | Editor theme ('snow' or 'bubble') |
| modules | QuillOptionsStatic['modules'] | - | Quill modules configuration |
| formats | string[] | - | Allowed formats |
| style | React.CSSProperties | - | Custom styles |
| className | string | - | Custom CSS class |

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build

# Run tests
npm test
```

## License

MIT 