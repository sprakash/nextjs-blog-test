import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'
import { useBlogger } from '../lib/posts'


export default function Home( allPostsData ) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
       <section className="m-3">
        <p className="text-indigo-400 border-b border-gray-400 text-left pb-1 pt-4">blog feed</p>
        <ul className="list-none text-left my-4">
          {/* <li><a className="alink hover:alink-hover hover:underline" href="https://sh000bz.medium.com/10-things-i-learned-from-teaching-a-full-stack-dev-bootcamp-9b8607ddfd39">10 Things I learned from teaching a Full Stack Dev Bootcamp.</a>
                <small>
                  <div className="text-xs text-gray-400">{'02/25/2021'}</div>
                </small>
                </li> */}
            {allPostsData.posts.items.map(({id, published, title}) => (
                <li key={published} className="my-4 text-alink hover:text-alink-hover">
                <Link href={`/posts/${id}`}>
                  <a className="alink hover:alink-hover hover:underline" >{title}</a>
                </Link>
                <br />
                <small className="text-xs text-gray-400">{new Date(published).toLocaleDateString()}
                </small>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  return useBlogger();
}
