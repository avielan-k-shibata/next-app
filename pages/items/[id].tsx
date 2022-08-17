import Layout from '../../components/templates/layout';
import { useRouter } from 'next/router'
import { getAllItemsForHome, getItemsForDatail } from "../../lib/api"
import { Item, ItemData } from "../types/items"
import { useQuery } from '@apollo/client';
import { ITEM_QUERY } from "../../components/query"

export default function Items() {
  const router = useRouter()
  const { loading, error, data } = useQuery<ItemData>(ITEM_QUERY, {
    variables: { id: router.query.id }});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const  item  = data? data.item.data: "" ;
  if (!item) return null;
  return (
    <Layout>
      id:{item.id}<br />

      アイテム名: {item.attributes.name}
    </Layout>
  );
}


export async function getStaticProps({ params, preview = false, previewData }: any) {

  
  return {
    props: {
      preview,
      // item: data.item,
      items: {},
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const data = await getAllItemsForHome()

  const paths = data.map((item: Item) => ({
    params: { id: item.id },
  }))
  return { paths, fallback: false }
}