import Layout from '../../components/templates/layout';
import { useRouter } from 'next/router'
import {getAllItemsForHome, getItemsForDatail} from "../../lib/api"
import { Item } from "../types/items"

export default function Items({items}: any) {
    const router = useRouter()
    
    return <Layout>{console.log(items)}</Layout>;
}


export async function getStaticProps({ params, preview = false, previewData }) {
    const data = await getAllItemsForHome(params)
    const data2 = await getItemsForDatail(params, preview)

    console.log(params,data2, 2)
    return {
      props: {
        preview,
        // item: data.item,
        items: data,
      },
      revalidate: 10,
    }
  }

export async function getStaticPaths() {
    const data = await getAllItemsForHome()

    const paths = data.map((item: Item)=>({
        params: { id: item.id },
    }))
    return {paths, fallback: false}
}