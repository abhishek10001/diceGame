
import styles from "../Gamepage/GamePage.module.css";
import RoleDice from "../RoleDice/RoleDice";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import Rules from "../rules/Rules";
const GamePage = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [rNum, setRNum] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError]=useState("");
  const [showRules,setShowRules]=useState(false);

  function randomNum() {
    return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  }

  function roleDice() {
    const randomNumber = randomNum(); // Generate random number
    setRNum( randomNumber); // Update rNum state with the new random number

    if (!selectedNumber) {
      setError("You Have Not Selected Any Number!!")
      return error;
    }
    if ( randomNumber=== selectedNumber) {
      setScore((prev) => prev + randomNumber);
    }
    else{
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  }

function resetScore(){
  setScore(0);
}
  return (
    <div className={styles.container}>
      <Navbar
      setError={setError}
      error={error}
      score={score}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
      <div className={styles.selectNum}>
        <p>SELECT ANY NUMBER</p>
      </div>
      <RoleDice showRules={showRules} setShowRules={setShowRules} resetScore={resetScore} rNum={rNum} roleDice={roleDice} />
      <div className={styles.ruleElement}>{showRules && <Rules />} </div>
    </div>
  );
};

export default GamePage;


// conflicting setting of rnum
// import styles from "../Gamepage/GamePage.module.css";
// import RoleDice from "../RoleDice/RoleDice";
// import Navbar from "../navbar/Navbar";
// import { useState } from "react";

// const GamePage = () => {
//   const [selectedNumber, setSelectedNumber] = useState(null);
//   const [rNum, setRNum] = useState(1);



//   function randomNum() {
//     const randomNumber = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
//     setRNum(randomNumber);
//   }

//   function roleDice(){
//       const randomNumber=randomNum();
//       setRNum((prev)=>randomNumber);
//   }

//   return (
//     <div className={styles.container}>
//       <Navbar
//         selectedNumber={selectedNumber}
//         setSelectedNumber={setSelectedNumber}
//       />
//       <div className={styles.selectNum}>
//         <p>SELECT ANY NUMBER</p>
//       </div>
//       <RoleDice rNum={rNum} roleDice={roleDice}/>
//     </div>
//   );
// };

// export default GamePage;
