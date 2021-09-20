import Layout from "../components/layout";
import Head from "next/head";
import { getAllPostsId, getPostData } from "../../lib/posts";
import Date from "../components/date";

export  default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title> {postData.title}</title>
            </Head>
            {postData.id}
            <br/>
            <Date dateString={postData.date}/>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml }} />
        </Layout>
    )
}

export async function getStaticPaths() {
    // return a list of possible value for id
    const paths = getAllPostsId()
    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({params}) {
    // fetch necessary data for the blog post using params.id

    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
