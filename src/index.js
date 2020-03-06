import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Content from './app'

const App= ()=>{
    return <div>
        <Content/>
    </div>
}

ReactDOM.render(<App />,document.getElementById('root'));
