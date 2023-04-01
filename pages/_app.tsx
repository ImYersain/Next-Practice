import NextNProgress from 'nextjs-progressbar';
import { ComponentType } from 'react';
import { AppProps } from 'next/app'
import '../styles/main.scss';

type MyAppProps = AppProps & {
    Component: ComponentType<any>;
  };

export default function myApp({Component, pageProps}: MyAppProps) {
    return (
        <>
            <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
            <Component {...pageProps} />
            {/* можно так инлайн стилями, либо можно импортировать файл со стилями */}
            {/* <style jsx global>{`    
                body {
                    font-family: 'Roboto', sans-serif;
                    padding: 20px 20px 60px;
                    max-width: 680px;
                    margin: 0 auto;
                }
            `}</style> */}
        </>
    )
}