import React from 'react';

/*class based component*/
// class Weather extends React.Component{
//     render(){
//         return(
//             <div>
//                 {/* if  this.props.city returns true && this.props.country returns true & only then do we display <p> */}
//                 {this.props.city && this.props.country && <p>Location: {this.props.city }, {this.props.country }</p>}
//                 {/*if this .props.temperature exists, render out the paragraph*/}
//                 {this.props.temperature && <p>Temperature: {this.props.temperature }</p>}
//                 {this.props.humidity && <p>Humidity: {this.props.humidity }</p>}
//                 {this.props.humidity && <p>Conditions: {this.props.description }</p>}
//                 {this.props.error && <p>{this.props.error}</p>}
//             </div>
//         );
//     }
// };

/*stateless functional component*/
/*without class keyword cannot use 'this' in return statement*/
/*if we are returning 1 single element (in this case the div) I can omit 'return();'*/
/*also, if we are returning 1 single aregument, we can drop parenthasis '(props)' and 
change from '{}' to '()'*/
const Weather = props => (
    //return(
        <div className="weather__info">
                {/* if  this.props.city returns true && this.props.country returns true & only then do we display <p> */}
                {
                    props.city && props.country && <p className="weather__key">Location: 
                    <span className="weather__value"> {props.city }, {props.country }</span>
                    </p>
                }
                {/*if this .props.temperature exists, render out the paragraph*/}
                {
                    props.temperature && <p className="weather__key">Temperature: 
                    <span className="weather__value"> {props.temperature }</span>
                    </p>
                }
                {
                    props.humidity && <p className="weather__key">Humidity: 
                    <span className="weather__value"> {props.humidity }</span>
                    </p>
                }
                {
                    props.humidity && <p className="weather__key">Conditions: 
                    <span className="weather__value"> {props.description }</span>
                    </p>
                }
                {
                    props.error && <p className="weather__error">{props.error}</p>
                }
            </div>
    //);
);


export default Weather;