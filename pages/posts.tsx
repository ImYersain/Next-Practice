import {useState, useEffect} from 'react';
import Head from "next/head";
import { MainLayout } from "../components/MainLayout";
import Link from 'next/link';
import { IPost } from '../interfaces/post';
import { NextPageContext } from 'next';

interface IPostsProps {
    posts: IPost[];
}

export default function Posts({posts: serverPosts}: IPostsProps) {
    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await fetch('http://localhost:4200/posts') // здесь приходит джейсон
                const json = await response.json(); // здесь я этот джейсон парсю в обычный массив, и ставлю впереди эвейт потому что иначе будет приходить лишь промисс
                setPosts(json);
            } catch (error) {
                console.log(error);
            }
        }

        if(!serverPosts){
            loadPosts();
        }
    }, [])

    if(!posts) {
        return (
            <MainLayout>
                <h1>Loading...</h1>
            </MainLayout>
        )
    }
    return (
    <MainLayout title={'Posts page'}>
        <h1>Posts</h1>
        <ul>
            {posts.map(post => <li key={post.id}> <Link href={'/post/[id]'} as={`/post/${post.id}`}>{post.title}</Link></li>)}
        </ul>
    </MainLayout>
    )
}

// GetInitialProps
Posts.getInitialProps = async ({req}: NextPageContext) => {
    if(!req) {
        return {posts: null}
    }
    const response = await fetch(`${process.env.BASE_URL}/posts`);
    const posts: IPost[] = await response.json();

    return {posts};
}

// // GetServerSideProps
// export async function getServerSideProps() {
//     const response = await fetch(`${process.env.BASE_URL}/posts`);
//     const posts: IPost[] = await response.json();

//     return {props: {posts}};
// }