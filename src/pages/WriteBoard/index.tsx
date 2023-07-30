import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';


const WriteBoard = () => {
  return (
    <div>
      <h1>My Toast UI Editor</h1>
      <Editor 
        placeholder="내용을 입력해주세요."
      />
    </div>
  );
};

export default WriteBoard;