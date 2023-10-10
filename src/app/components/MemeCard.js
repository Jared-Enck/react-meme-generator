import React from 'react';
import styles from './MemeCard.module.css';

export default function MemeCard({ meme }) {
  return meme ? (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${meme.imageUrl})` }}
    >
      <div className={styles.textOverlay}>
        <p>{meme.top}</p>
        <p>{meme.bottom}</p>
      </div>
    </div>
  ) : null;
}
