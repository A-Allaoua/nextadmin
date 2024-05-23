import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircle } from 'react-icons/md';

function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available</span>
          <h3 className={styles.title}>🔥 How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Taks 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            nesciunt iste quae nisi eum sequi quisquam non id, consequuntur,
            numquam soluta culpa neque enim distinctio tempore! Eligendi
            consectetur exercitationem laudantium.
          </p>
          <button className={styles.button}>
            <MdPlayCircle/>
            Watch
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available</span>
          <h3 className={styles.title}>🔥 How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Taks 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            nesciunt iste quae nisi eum sequi quisquam non id, consequuntur,
            numquam soluta culpa neque enim distinctio tempore! Eligendi
            consectetur exercitationem laudantium.
          </p>
          <button className={styles.button}>
            <MdPlayCircle/>
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rightbar
