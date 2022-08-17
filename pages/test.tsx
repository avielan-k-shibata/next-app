import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
// import { NextApiRequest, NextApiResponse } from 'next';
import { Item } from "./types/items"
import { AppProps } from 'next/app';
import Layout from "../components/templates/layout"

import axios from 'axios';

import { gql } from "@apollo/client";
import client from "../apollo-client";

const token = 'b4e349da21812b3469514026d163b160f941845f86f7f5d2972f9c6757ba5f54800af30a7cc19883bce0eac97423be75266dda504f99e3422d8b0ae5d0865f994cad9cdc3c65d097a7fc2f5c7724ef6d0b8322f19fb90fdcccd16abdd79b0a2e5282adb663d2db8f2491d9603530726fb1eb06fcbd77df35c97b682e94e3a7bc';


const Test: NextPage = ({ items,  }: any) => {
    console.log(items, )
  return (

    <Layout>
      <Head>

        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div>Welcome to Next.js!a333</div>
        <Link href="/about">
          <a>about</a>
        </Link>
      </div>
      <h1 className="text-6xl font-bold">
        Welcome to{' '}
        <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>
      </h1>
      <div className="flex flex-wrap">
      {items.map((item:Item)=>{
          return(

            <div key={item.id}>{item.attributes.name}</div>

          )
        })}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
        query GetItems {
            items {
                data{
            id
            attributes{
              name
            }
          }
          }
        }
      `,
    });

    return {
      props: {
        items: data.items.data,
      },
   };
}
export default Test
