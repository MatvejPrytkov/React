import React, {useState} from 'react'
const Like = ({value}) => {
 const [num, setNum] = useState( value );
 const [isDark, setIsDark] = useState(false);
 const clickHandler = (ev) => {
 setNum(num + 1);
 setIsDark(!isDark);
 };

 return (
 <button
 
 onClick = {clickHandler}
 >
 Like {num} {isDark ? "👕" : "🦺"}
 </button>
 )
}


export default Like