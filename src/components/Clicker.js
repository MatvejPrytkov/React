import React, {useState} from 'react'
// const Clicker = ({value}) => {
//  const [num, setNum] = useState( value );
//  const [isDark, setIsDark] = useState(false);
//  const clickHandler = (ev) => {
//  setNum(num + 1);
//  setIsDark(!isDark);
//  };

//  return (
//  <button
 
//  onClick = {clickHandler}
//  >
//  Clicker {num} {isDark ? "👕" : "🦺"}
//  </button>
//  )
// }

class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        num: props.value,
        isDark: false
        }
        this.clickHandler = this.clickHandler.bind(this);
        }
        clickHandler(ev){
            this.setState({
            num: this.state.num + 1,
            isDark: !this.state.isDark
            })
            }
        render() {
            return (
            <button
            className={"btn" + (this.state.isDark ? " btn-dark" : "")}
            onClick={this.clickHandler}
          
            >
            Clicker {this.state.num}
            </button>
            );
            }
}

export default Clicker