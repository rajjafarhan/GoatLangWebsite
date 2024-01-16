
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Editor = () => {
    const codeString = 'user = {\n' +
    '  firstName: "Angela",\n' +
    '  lastName: "Davis",\n' +
    '  role: "Professor",\n' +
    '}\n' +
    '\n' +
    'display(user.name)';
  return (
    <div className='w-full h-full rounded-lg border border-gray-300 p-4 bg-teal-800'>
        <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
    </div>

  )
}

export default Editor
