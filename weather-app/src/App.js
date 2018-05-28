// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

//***** START CUSTOM CODE BELOW *****//
//point of API key is to identify who you are and what kind of
//data you are trying to access 25:04
import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY ="8773052ee3958d51bcc63d58e3243782";

/*two types of React components. Class based (used below and in all files)
and there are stateless functional components. A stateless functional component 
does not contain any state. A stateless functional component does not need to be 
'class' bases to import all of the class properties*/

class App extends React.Component { //component that exists in modules
  
  //*state is and object that lives within a component and keeps track of changing data
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //arrow functions allow use of 'this' keyword independately (new to Reach 16)
  getWeather = async (e) => {
    e.preventDefault(); //prevents default behavior of this component when button pressed
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //below injecting api sting as well as values for city and country
    //using template string : normal strings but they allow you to inject
    //the variables that I have defined in my files
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); //29:00
    //convert api data into readable format 
    //that any program language can understand (JSON)
    const data = await api_call.json();

    if(city && country)
    {
      //console.log(data);
      
      //*do not ever directly manipulate the state - bad practice!
      this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
        })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the vaules."
          })
    }

  };

  render() { //render returns jsx
    return ( //return can only return one parent element
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                {/*Telling to put title on left hand side with width of 5 columns
                and put form on right hand side with width of 7 columns*/}
                <div className="col-xs-5 title-container"> {/*Bootstrap provided 12 columns*/}
                  <Titles /> {/* to insert a component, type in a name with a self closing name tab */}
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>  {/* Giving Form component access to getWeather function here using 'props' */}
                  <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                    />
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
  }
};






export default App; //make this component available for other files to import