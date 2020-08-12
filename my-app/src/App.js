import React from 'react';
import './App.css';
import axios from "axios"

class  App extends React.Component {       //step 1 create your class compoenent 
 constructor(){
    super();                             // step 2 add constructor and super objects 
    this.state = {                        // step 3 define state . 
     user:[]   
                                           // step 6  pass the objec API call into state 
    }

 }
                                              // step 4 mount BEGGINING OF CYCLE . 
componentDidMount() {
   console.log('CDM running');
   this.setState({ user: [3, 4, 5] });
   axios.get('https://api.github.com/users/Johnjohnn')                            // step 5  get axios and import it at the top ! 
   .then((res)=> {
                                                                                      //console.log(res);
     this.setState({user: res.data.message}) ;
     console.log(this.state);                                                                                
   })
   .catch((err)=> console.log(err) )
}

componentDidUpdate() {
console.log('State updated! ')

}



render() {
  return (
     <div className="App">
       <h1> Github API </h1>
     
       <div className="profile">
      
     ))}

     </div>
     </div>
  )
  
  }



}

export default App;
