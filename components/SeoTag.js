import Head from 'next/head';

const SeoTag = ({pageTitle, siteName, description}) => {

    return (
        <Head >
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta property="og:url" content="https://snakeheadpm.vercel.app/" key="ogurl" />
            <meta property="og:image" content="/android-chrome-512x512.png" key="ogimage" />
            <meta property="og:site_name" content={siteName} key="ogsitename" />
            <meta property="og:title" content={pageTitle} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdesc" />
            <title>{pageTitle} | SPM</title>
        </Head>
    )
};

export default SeoTag;