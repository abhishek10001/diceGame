import styles from "../rules/Rules.module.css";
const Rules = () => {
  return (
    <div className={styles.RulesContainer}><h2>How to play dice game</h2>
    <div className="text">
      <p>1. Select any number</p>
      <p>2. Click on dice image</p>
      <p>
        3. after click on dice if selected number is equal to dice number you <br />
        4. will get same point as dice{" "}
      </p>
      <p>5. if you get wrong guess then 2 point will be dedcuted </p>
    </div></div>
  );
};

export default Rules;