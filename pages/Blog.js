import Head from "next/head"
import Link from "next/link"

const Blog = () => {
    return (
        <>
            <Head>
                <title>TouchMyLike | Blog</title>
                <meta name="keywords" content="TouchMyLike" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>Blog</h1>
                <Link href="/blogs">
                    <a>See blogs Listing</a>
                </Link>
            </div>
        </>
    )
}
export default Blog