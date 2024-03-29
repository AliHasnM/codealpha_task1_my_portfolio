import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ali Hassan</h1>
            <p className={styles.description}>I'm a Full-Stack Developer with 2 Year experience using React Js and Node Js. Reach out if you'd like to learn more!</p>
            <a href="mailto:mughal201burewala@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} className={styles.heroImg} alt="Hero Image for me"/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
