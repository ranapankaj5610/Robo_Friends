import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import { robots } from './robots'; //we dont need this robots.js file anymore bcz now we fetch the data from server site
import './App.css';

class App extends Component{
  constructor(){
    super()    //by super() we call the parent construtor first
    this.state={   
      robots:[],
      searchfield:''
    }
  }
//a lifecycle hook
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')//this url gives us the users name email and id randomly
    .then(response=>response.json())  //we convet the resposnse in json format
    .then(users=>{this.setState({ robots: users})});
  }
  onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
  }

  render(){
    const {robots, searchfield}= this.state;//this is called destructuring 
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(robots.length === 0)
    return <h1 className='tc'>Loading</h1>
    else
    {
      return(
        //tc implies for text center
        <div className='tc'> 
        <h1 className='f1'>RoboFriends</h1>
           <SearchBox searchChange={this.onSearchChange}/>
             <Scroll>
               <Cardlist robots={filteredRobots}/>
             </Scroll>
             
        </div>
        
      );
    }
   
  }
}


export default App;