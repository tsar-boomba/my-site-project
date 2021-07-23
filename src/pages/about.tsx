import React from "react";
import Head from "next/head";
import styles from "../styles/Posts.module.css"

const About = () => {
    return(
        <>
            <Head>
                <title>About Isaiah</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <a className={styles.card}>
                        <div>Isaiah is cool and smart!</div>
                    </a>
                </div>
            </div>
            </>
    )
}

export default About
