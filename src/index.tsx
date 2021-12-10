import React from 'react';
import ReactDOM from 'react-dom';
import { Calculator } from './components/Calculator';
import { OutputScreen } from './components/OutputScreen';
import GlobalStore from './store/GlobalStore';

const HelloWorld = () => {
    return (
        <GlobalStore>
            <Calculator />
        </GlobalStore>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));