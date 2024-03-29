import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

import Layout from "../components/templates/layout"
import { getAllItemsForHome } from "../lib/api"

import {IO} from "../components/atoms/IO"

import { Item } from "../pages/types/items"

export default function About({ items, preview, id }:any) {
    console.log(items, preview, id)
    return (
        <Layout>
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
            <IO as="span" c_name="aaa">321</IO>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            {items.map((item: Item) => {
                return (
                    <p key={item.id}>{item.id}{item.attributes.name}</p>
                )
            })}
        </Layout>
    )
}

export async function getStaticProps({ params, preview = false, previewData }) {
    const data = await getAllItemsForHome(params, preview, previewData)
    console.log(params, 232 ,previewData)
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