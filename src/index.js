import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ActionSheet from './components/ActionSheet/index.jsx';
import Header from './components/Header/index.jsx';
import NewA from './components/A.jsx'
import c from './heightCompnents/c.js';
import B from './components/B.jsx';


const NewB = c(B);
class App extends Component{
    render(){
        return (
            <div >
                {/* <ActionSheet />
                <Header /> */}
                <NewA />
                <NewB />
            </div>
        )
    }
}
// export default App;
const root = document.getElementById('root');
ReactDOM.render(<App />,root);



