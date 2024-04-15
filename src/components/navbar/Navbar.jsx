import { useState } from "react";
import styles from "../navbar/Navbar.module.css";


const Navbar = ({selectedNumber,setSelectedNumber , score , error,setError}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

function errorHandler(value){
  setSelectedNumber(value)
  setError("");
}
  return (
  
    <div className={styles.Navigation}>
    
    <div className={styles.score}>
          <h1>{score}</h1>
          <p>TOTAL SCORE</p>
        </div>
      <div className={styles.btns}>
        {console.log(selectedNumber)}
        <p>{error}</p>
        {arrNumber.map((value, i) => (
          <button
            key={i}
            onClick={() =>errorHandler(value) }
            style={{
              backgroundColor: value === selectedNumber ? "black" : "white",
              color: value === selectedNumber ? "white" : "black",
            }}
          >
            {value}
          </button>
        ))}
      </div>
     
    </div>
  );
};

export default Navbar;



// import { useState } from "react";
// import styles from "../navbar/Navbar.module.css";
// import Score from "../score/Score";
// const Navbar = () => {
  
//   const [selectedNumber, setSelectedNmber]= useState("");

//   const arrNUmber = [1, 2, 3, 4, 5, 6];
//   return (
//     <div className={styles.Navigation}>
//       <Score />
//       <div className={styles.btns} >
// {console.log(selectedNumber)}
//         {
//           arrNUmber.map((value, i) => (
//             <button
//             isSelected={value===selectedNumber}
//              key={i}
//               onClick={()=> setSelectedNmber(value)} 
//               style={{backgroundColor: isSelected===true ?"black":"white",  color: isSelected===true ? "white" : "black"}}>{value}</button>))
              
//         }

//       </div>
//       <div className={styles.selectNum}><p>SELECT ANY NUMBER</p></div>
//     </div>
//   );
// };
