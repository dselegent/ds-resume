import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/** 重置样式 */
import '@unocss/reset/normalize.css'
/** 项目内的样式 */
// import './index.css'
/** 引入uno.css*/
import 'virtual:uno.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
