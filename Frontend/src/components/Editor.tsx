import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Editor = () => {
    const codeString = 'const user = {\n' +
    '  firstName: "Angela",\n' +
    '  lastName: "Davis",\n' +
    '  role: "Professor",\n' +
    '}\n' +
    '\n' +
    'console.log(user.name)';
  return (
    <div className='w-full h-full rounded-lg border border-gray-300 p-4 bg-teal-800'>
        <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
    </div>

  )
}

export default Editor