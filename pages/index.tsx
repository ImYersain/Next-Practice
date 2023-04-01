import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Index() {

    return (
    <MainLayout title={'Index page'}>
        <h1>Hello next.js!</h1>
        <p><Link href={'/posts'}>Posts</Link></p>
        <p><Link href={'/about'}>About</Link></p>
    </MainLayout>
    )
}