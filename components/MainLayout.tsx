import Head from "next/head";
import Link from "next/link";

interface IMainLayoutProps {
    children: React.ReactNode,
    title?: string
}

export function MainLayout({children, title}: IMainLayoutProps) {
    return (
        <>
        <Head>
            <title>{title} | Next courses</title>
            <meta name="keywords" content="next, javascript, react, SSR" />
            <meta name="description" content="This is practice and first try to work with Next.js SSR" />
            <meta charSet="utf-8" />
        </Head>
        <nav>
            <Link href={'/'} style={{color: 'white', textDecoration: 'none'}}>Home</Link>
            <Link href={'/about'} style={{color: 'white', textDecoration: 'none'}}>About</Link>
            <Link href={'/posts'} style={{color: 'white', textDecoration: 'none'}}>Posts</Link>
        </nav>
        <main>
            {children}
        </main>

        <style jsx>{`
            nav {
                position: fixed;
                height: 60px;
                top: 0;
                left: 0;
                right: 0;
                background: darkblue;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }

            main {
                margin-top: 60px;
            }
        `}</style>
        </>
    )
}