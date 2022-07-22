import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

import Layout from "../components/templates/layout"
import {getAllItemsForHome, getAllItemsWithSlug} from "../lib/api"

import {Item} from "../pages/types/items" 

export default function About({  items, preview ,id}) {
    return (
        <Layout>
            {console.log(items, id)}
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
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
            {items.map((item: Item)=>{
                return(
                    <>
                    {item.id}
                    </>
                )
            })}
        </Layout>
    )
}
  
export async function getStaticProps({ params, preview = false, previewData }) {
    const data = await getAllItemsForHome(params, preview, previewData)
    // const data2 = await getAllItemsWithSlug()
    return {
      props: {
        preview,
        // item: data.item,
        items: data,
        // id: data2,
      },
      revalidate: 10,
    }
  }