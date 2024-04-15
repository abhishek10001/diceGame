import Button from "../Buttons/Button";
import styles from "../landingpage/Landing.module.css";

function Landing({toggle}) {
  return (
    <div className={styles.landing}>
    <img src="../public/images/dice1img.png" alt=" dice" />
    <Button togg={toggle} />
    </div>
    
   
    
  );
};

export default Landing;