import fs from 'fs';
import styles from '/styles/Posts.module.css';

const CardList = ({ id }, title : any) => {
    return (
        <div className={styles.grid}>

        <a key={id} className={styles.listcard}>
            <h2>{title}</h2>
                {id.map(id => {
                    return (
                            <div key={id}>
                            <a href={"/posts/" + id}>{id}</a>
                            </div>
                    )
                })}
        </a>

    </div>
    )
}

export const getStaticProps = async () => {
	const files = fs.readdirSync('posts')
	return {
		props: {
			id: files.map(filename => filename.replace('.md', ''))
		}
	}
}

export default CardList
