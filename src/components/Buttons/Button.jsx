import styles from "../Buttons/Button.module.css";
function Button({togg}) {
  return (
    <div className={styles.ButtonContainer}>
    <h1>DICE GAME</h1>
    <button onClick={togg} className={styles.playNow_btn}>Play Now</button>
      
    </div>
    
  );
};

export default Button;