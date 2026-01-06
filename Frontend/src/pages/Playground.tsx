import { useRef, useState } from "react";
import Editor from '@monaco-editor/react';
import Modal from "../components/Modal";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const Playground = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [op, setOp] = useState('');
  const [er, setEr] = useState('');
  const [astree, setAstree] = useState(null);
  const [viewAst, setViewAst] = useState(false);
  const [theme, setTheme] = useState('vs');
  const [activeBtn, setActiveBtn] = useState('output');


  // function formatCodeToSingleLine(code) {
  //   return code.replace(/\n/g, '').replace(/\s+/g, ' ');
  // }

  const showValue = async () => {
    const codee = editorRef.current!.getValue();

    if (codee === "") {
      alert("Please write something");
      return;
    }
    const formatedCodeInput = codee;
    try {
      const response = await fetch('https://goat-lang-website-backend.vercel.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formatedCodeInput }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error from server:', errorData.error);
        const a = errorData.error.stack;
        const formattedStackTrace = a.replace(/\n/g, '\n');
        setEr(formattedStackTrace);
        setOp('')
        setAstree(null)
      } else {

        const { astree, final } = await response.json();
        setAstree(astree)
        setEr('')
        setOp(final);
      }
    } catch (error) {
      console.error("Error in catch:", error);
    }
  };

  return (
    <>
      <div className="bg-[#f2f2f2] p-2">
        <h1 className="font-sans text-xl font-semibold ml-3">Playground</h1>
      </div>

      {viewAst ?
        <Modal viewAst={viewAst} setViewAst={setViewAst} astree={astree} />
        : null
      }


      <div className="flex flex-row md:flex-row md:h-[90vh]">
        <div className="border-r border-solid border-gray-300 w-full md:w-[65vw]">
          <div className="flex justify-end">
            <button className="font-sans text-lg font-semibold hover:bg-[#f2f2f2] w-20 p-1" onClick={showValue}>Run</button>
            <select
              value={theme}
              onChange={(e) => { setTheme(e.target.value) }}
              className="ml-1 p-1 border border-gray-300 font-mono border-l-0 border-t-0 border-r-0 outline-none"
            >
              <option value="vs">light</option>
              <option value="vs-dark">dark</option>
              <option value="hc-black">hc-black</option>
            </select>
          </div>

          <div className="-ml-7">
            <Editor
              height="80vh"
              theme={theme}
              defaultValue={`user = {
  firstName: "Angela",
  lastName: "Davis",
  role: "Professor",
}

display(user.firstName)`}
              options={{
                autoIndent: 'full',
                contextmenu: true,
                fontFamily: 'monospace',
                fontSize: 16,
                lineHeight: 24,
                hideCursorInOverviewRuler: true,
                matchBrackets: 'always',
                minimap: {
                  enabled: true,
                },
                scrollbar: {
                  horizontalSliderSize: 2,
                  verticalSliderSize: 2,
                },
                selectOnLineNumbers: true,
                roundedSelection: true,
                readOnly: false,
                cursorStyle: 'line',
                wordWrap: "on",
                automaticLayout: true,
              }}
              defaultLanguage="goatLang"
              onMount={(editor, monaco) => {
                editorRef.current = editor;
                monaco.editor.defineTheme("myCoolTheme", {
                  base: "vs",
                  inherit: false,
                  rules: [
                    { token: "", foreground: "#5846ff" },

                  ],
                  colors: {
                    "editor.foreground": "#376eff",
                    "editorLineNumber.foreground": "#008000",
                  },
                });
                monaco.editor.setTheme('myCoolTheme')
              }}
            />
          </div>
        </div>

        <div className="bg-[#16234c] font-mono w-full md:w-[35vw] overflow-y-auto no-scrollbar">
          <div className="bg-white flex justify-end sticky top-0">
            <button
              className={`w-20 h-9 ${activeBtn === "output" ? "bg-gray-100 border-b-2 rounded border-blue-900 " : ``}`}
              onClick={() => { setActiveBtn("output") }}
            >
              Output
            </button>
            <button
              className={`w-20 h-9 ${activeBtn === "javascript" ? "bg-gray-100 border-b-2 rounded border-blue-900 " : ``}`}
              onClick={() => {
                setViewAst(!viewAst);
              }}
            >
              View AST
            </button>
          </div>

          <div className="ml-2 mt-3 font-mono  text-sm text-white">
            {er ? (<span className="break-words whitespace-pre-wrap pr-1 text-slate-300 ">{er}</span>
            ) : (
              (op) ?
                (
                  <pre className="break-all whitespace-pre-wrap pr-1">{op}<br />
                    <span className="blink font-extrabold">{"_"}</span>
                  </pre>
                )
                : <i className="text-gray-400">//The output will be displayed here</i>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Playground;

