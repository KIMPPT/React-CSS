import React from "react";
//import './counter.module.css'
import styles from './counter.module.css'
export default function CounterComp() {
  return (
    <div>
      <h3 className={`${styles.color} ${styles.font}`}>{styles.color}</h3>
    </div>
  );
}
