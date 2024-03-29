import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'




const FirstPost = (props) => {
    return (


        <>
            <Head>
                <title>First Post</title>

            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
                <Image

                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Your Name"
                    src="/images/profile.jpg" />
            </h2>

        </>

    )
}

export default FirstPost