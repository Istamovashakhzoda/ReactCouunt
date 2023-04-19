// import React, {useState} from "react";
// import { FaMoon, FaUssunnah } from 'react-icons/fa';

// const UseHooks = () =>{
//   const [count, setCount] = useState(0);
//   const [sumCount, setSumCount] = useState(0);

//   const [kun, setKun] = useState(true);
//   const [tun, setTun] = useState(false);

//   const handleClick = () =>{
//     setCount(count + 1);
//     setSumCount(sumCount + 1);
//     if(count == 99){
//       setCount(0)
//     }
//   };

//   const resentClick = () =>{
//     setCount(0);
//     setSumCount(0)
//   };

//   const toogleClick = () =>{
//     if (kun){
//       setKun(false);
//     }else{
//       setKun(true)
//     }

//     if(tun){
//       setTun(false)
//     }else{
//       setTun(true)
//     }
//   }
//   return(
//       <div
//       className="count"
//       style={{backgroundColor:tun ? "#000" : "#007336"}}>
//      <div className="tabloTop">
//       <div className="reset" onClick={resentClick}>
//         Reset
//       </div>
//       <div className="reset2">
//         { kun ? (
//           <FaMoon onClick={toogleClick} />
//         ) : (
//         <FaUssunnah onClick={toogleClick} />
//         )}
//       </div>
//      </div>
//         </div>
       
//   );
// }

// export default UseHooks;