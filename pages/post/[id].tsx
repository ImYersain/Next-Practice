import { NextPageContext } from "next";
import { Main } from "next/document";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { IPost } from "../../interfaces/post";

interface IPostProps {
    post: IPost
}

export default function Post({post: serverPost}: IPostProps) {
    const [post, setPost] = useState(serverPost);
    const router = useRouter();   //router.query.id -  чтоб получить айди роута

    useEffect(() => {
        const loadPost = async () => {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
            const data = await response.json();
            setPost(data)
        }

        if(!serverPost) {
            loadPost()
        }
    }, []);

    if(!post) {
        return (
            <MainLayout>
                <h1>Loading...</h1>
            </MainLayout>
        )
    }

    return(
    <MainLayout title={'Post page'}>
        <h1>Post {post.title}</h1>
        <hr />
        <p>{post.body}</p>
        <Link href={'/posts'}>Back to all posts</Link>
    </MainLayout>
    )
}

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async ({query, req}: PostNextPageContext) => {
    if(!req) {
        return {post: null}
    }
    const response = await fetch(`${process.env.BASE_URL}/posts/${query.id}`);
    const post: IPost = await response.json();

    return {post}
}