import Layout from "../../components/layout";
import Head from "next/head";
import { getPathIds, getPostData } from "../../lib/posts";

export  default function Post({ postData } ) {
    console.log(postData, " post data ");
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Per Aspera Ad Astra" key="title" />
            </Head>
            <div>
                <div className="font-bold text-lg mt-3">
                    <div className="mb-2 text-gray-500 text-center">{postData.title}</div>
                    <div className="text-xs mt-1 text-gray-700 bg-gradient-to-r from-purple-100 via-blu-200 t-purple-100 p-1 text-right pr-2 text-opacity-25">{ new Date(postData.published).toLocaleDateString() }</div>
                </div>
                <div className="m-5" dangerouslySetInnerHTML={{ __html: postData.content }} />
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    // return a list of possible value for id
    const paths = await getPathIds()
    
    //all the id pages being created.
    //console.log(" path ", paths);

    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({params}) {

    // fetch necessary data for the blog post using params.id
    const postPage = await getPostData(params.id)
    const postData = postPage["blogContent"][0]

    //console.log(postData, " before sending")

    return {
        props: {
            postData
        }
    }
}
