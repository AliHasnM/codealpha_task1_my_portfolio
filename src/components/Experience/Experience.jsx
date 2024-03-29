import React from 'react'
import styles from "./Experience.module.css"
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from "../../utils"

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
        <div className={styles.skills}>{
            skills.map((skill, id)=>{
                return <div className={styles.skill} key={id}>
                    <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                    </div>
                    <p>{skill.title}</p>
                </div>
            })}
        </div>
        <ul className={styles.history}>
            {
                history.map((hsitoryItem, id)=>{
                    return <li className={styles.historyItem} key={id}>
                        <img src={getImageUrl(hsitoryItem.imageSrc)} alt={`${hsitoryItem.organisation} logo`}/>
                        <div className={styles.hsitoryItemDetails}>
                            <h3>{`${hsitoryItem.role}, ${hsitoryItem.organisation}`}</h3>
                            <p>{`${hsitoryItem.completedOn}`}</p>
                        </div>
                    </li>
                })
            }
        </ul>
        </div>
    </section>
  )
}
