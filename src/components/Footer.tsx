import NowPlaying from "./NowPlaying";
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <>
            <a className={styles.tetris} href='/tetris'>tetris</a>
            <NowPlaying />
            <span> | </span>
            <h3>Website by Isaiah</h3>
        </>
    )
};

export default Footer;
