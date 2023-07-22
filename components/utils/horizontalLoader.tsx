import React from 'react';
import styles from '@/styles/horizontalLoader.module.css';

const HorizontalLoader = () => {
  return (
    <div className={styles.horizontalLoader}>
      <div className={styles.loaderBar}></div>
    </div>
  );
};

export default HorizontalLoader;