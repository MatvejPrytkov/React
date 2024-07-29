import './Button.css';
const Button = function (props){
 const {onClickHandler, value} = props;
 return <button className='btn' onClick={onClickHandler}>
 {value}
 </button>
}
export default Button