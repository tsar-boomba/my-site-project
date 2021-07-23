import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import { GetStaticProps, GetStaticPaths } from 'next';
import head from "next/head";
import styles from '../../styles/Posts.module.css';
import Head from "next/head";

const Post = ({ htmlString, data }: any) => {
    return (
        <>
        <Head>
            <title>{data.title}</title>
        </Head>
        <div className={styles.container}>
            <div className={styles.grid}>
                <a className={styles.card}>
                    <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
                </a>
            </div>
        </div>
        </>
    )
};

//gets posts files' paths and returns them as id object without .md
export const getStaticPaths = async () => {
    
    const files = fs.readdirSync('posts');
    const paths = files.map(filename => ({
        params: {
            id: filename.replace('.md', '')
        }
    }));
    
    return {
        paths,
        fallback: false
    }
}

//this function takes the file paths and goes from raw md => md w/o meta data at top => raw html, returns the html as htmlString and the meta data as data
export const getStaticProps = async ({ params: { id } }: any) => {

    const markdownWithMetadata = fs.readFileSync(path.join('posts', id + '.md')).toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    const htmlString = marked(parsedMarkdown.content);

    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        }
    }
}

export default Post;