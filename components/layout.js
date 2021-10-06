import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'per aspera ad astra'
export const siteTitle = 'Shubhra Prakash'

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Shubhra Prakash Blog site title" />
                <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />            
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image"/>

            </Head>
            <header>
                { home ? (
                    <>
                        <p className="text-md text-center m-4 text-gray-400 font-bold">Next.js and TailwindCSS only for blog posts from Blogger API</p>
                        <div className="h-40 flex">
                            <img
                                src="/images/profile.jpg"
                                alt={name}
                                className="w-full object-cover"
                                />
                        </div>
                        <h1 className="text-3xl text-center font-bold text-blu-300">{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a className="h-20 flex">
                                <img src="/images/profile.jpg" className="w-full object-cover" height={100} width={100} alt={name} />
                            </a>
                        </Link>
                    </>
                )}
            </header>
            {!home && (
                <div className="text-center">
                    <Link href="/">
                        <a className="text-blu-300 hover:text-alink-hover hover:underline lowercase mr-4">Back to home</a>
                    </Link>
                    <hr/>
                </div>
            )}
            <main className="justify-self-auto">{children}</main>
         
        </div>
    )
}