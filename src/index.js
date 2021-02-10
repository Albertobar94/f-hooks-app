import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memo } from './components/06-memos/Memo';
import { MemoHook } from './hooks/MemoHook';

ReactDOM.render(
    <MemoHook /> ,
  document.getElementById('root')
);


