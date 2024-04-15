import styles from "../RoleDice/RoleDice.module.css";
import Rules from "../rules/Rules.jsx";
const RoleDice = ({ showRules, setShowRules, resetScore, rNum, roleDice }) => {
    return (
        <div>
            <div className={styles.roledice}>
                <div className={styles.diceface}> <button onClick={roleDice}>{rNum !== null && (
                    <img src={`../public/images/dice/dice_${rNum}a.png`} alt="dice" />
                )}</button>
                    <p>CLICK ON DICE TO ROLE</p></div>
                <div className={styles.buttn}>
                    <button className={styles.rButton} onClick={resetScore}>RESET</button>
                    <button className={styles.srButton} onClick={() => setShowRules((prev) => !prev)}> {showRules ? "HIDE" : "SHOW"} RULES</button>
                </div>

            </div>
            
        </div>

    );
};

export default RoleDice;

// So, if showRules is true, the expression evaluates to "Hide", indicating that clicking the button will hide the rules. If showRules is false, the expression evaluates to "Show", indicating that clicking the button will show the rules.