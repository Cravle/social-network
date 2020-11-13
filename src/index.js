import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 11},
    {id: 2, message: 'It\'s my first post', likesCount: 44},
    {id: 3, message: 'It\'s my first post', likesCount: 55},
]

let dialogs = [
    {id: 1, name: 'Vitalya'},
    {id: 2, name: 'Vitya'},
    {id: 3, name: 'Artem'},
    {id: 4, name: 'Den'},
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your web-site?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},

];


ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
