import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Second App I created for practice which was rendered below
// function AppTwo() {
//     return <h1>This is the Second App</h1>;
// }
// We can render two components like this here and wrapped with a div element
// instead of having a bunch of
root.render(
            // This does not add any elements to the DOM.
    // <div>
    //     <App />
    //     <AppTwo />
    // </div>

    // instead of having a bunch of divs on a page you can wrap different components with <react.fragment>
    // This does not add any elements to the DOM.
    // <React.Fragment>
    //     <App />
    //     <AppTwo />
    // </React.Fragment>

    // This is short hand version for rendering two components with no other additions to the DOM
    // <>
    //     <App />
    //     <AppTwo />
    // </>

    <App />

    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
