import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"
export const About = () => {
  return (
    <section  className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a Laptop" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a Frontend Developer with experience in building responsive and optimized sites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a Backend Developer with experience in developing fast and optimized System and APIs responsive and optimized sites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="UI/UX Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>UI/ UX Designer</h3>
                        <p>I have designed multiple Landing Pages and have created Design System as well</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
