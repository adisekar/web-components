import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { defineCustomElements, JSX as LocalJSX } from '@adi.sekar/stock-price-components/loader';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type StencilProps<T> = { [P in keyof T]: Omit<T[P], 'ref'> };
type ReactProps<T> = {
  [P in keyof T]: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>;
}
type StencilToReact<T = LocalJSX.IntrinsicElements, U = HTMLElementTagNameMap> = StencilProps<T> & ReactProps<U>;

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact { }
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
defineCustomElements(window);
