import React from 'react';
import Link from 'gatsby-link';
import styles from './Button1.module.scss';

const Button1 = props => (
  <div>
    <a href={props.link}>
      <span>
        <span className={styles.setup}>
          <svg className={styles.arrow} height="10" viewBox="0 0 306 306" width="10">
            <path d="m94.35 0-35.7 35.7 117.3 117.3-117.3 117.3 35.7 35.7 153-153z" />
          </svg>
          <span className={styles.setupanimationbg}>
            <span className={styles.animationbackground} />
            <span className={styles.name}>{props.name} </span>
          </span>
        </span>
      </span>
    </a>
  </div>
);

export default Button1;
