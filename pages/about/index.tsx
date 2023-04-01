import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

interface IData {
    title: string
}
interface IAboutProps {
    data: IData
}

export default function About({data}: IAboutProps) {
    return (
    <MainLayout title={'About page'}>
        <h1>{data.title}</h1>
        <button onClick={() => Router.push('/')}>Go back to home</button>
        <button onClick={() => Router.push('/posts')}>Go to posts</button>
    </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch(`${process.env.BASE_URL}/about`);
    const data: IData = await response.json()

    return {data};
}