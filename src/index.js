import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ActionSheet from './components/ActionSheet/index.jsx';
import Header from './components/Header/index.jsx';


class App extends Component{
    render(){
        return (
            <div >
                <ActionSheet />
                <Header />
            </div>
        )
    }
}
// export default App;
const div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<App />,div);



