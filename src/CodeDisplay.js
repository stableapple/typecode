import React, { useRef, useState } from "react";
import './CodeDisplay.css'
import MonacoEditor from 'react-monaco-editor'
import defcode from './code'

function CodeDisplay(){
  function onChange(v, e){
    let l = v.length - 1;
    // if code is 10 then get rid of length
    if(v.charAt(l) == defcode.charAt(v.length-1))
      console.log("same");
    else console.log("ERROR!!!!")
    // console.log("length",defcode.charAt(v.length-1))
  }
  function editorDidMount(editor, monaco){
    console.log("MOUNTED");
    console.log(editor)
    // console.log(monaco)
    editor.focus();
  }
  const options = {
    selectOnLineNumbers: true,
    cursorStyle: 'block',
    fontFamily: 'Lucida Console',
    fontSize: 13,
    // readOnly: true,
  }
  const [code] = useState('');
  const ref = useRef("monaco")
  return (
    <div>
     <MonacoEditor
        ref={ref}
        width="600"
        height="600"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    </div>
  );
}

export default CodeDisplay;