import {Component} from 'react';
import './home.css';
class Home extends Component
{
    render(){
        return(
            <div>
                <p className='test'>THIS IS A PARAGRAPH IN HOME COMPONENT</p>
                <button className='btn btn-primary'>Click</button>
            </div>
        );
    }
}
export default Home;