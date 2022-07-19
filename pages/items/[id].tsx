import Layout from '../../components/templates/layout';
import {getAllItemsWithSlug} from "../../lib/api"
export default function Post() {
  return <Layout>...</Layout>;
}



export async function getStaticPaths() {
const allItems = await getAllItemsWithSlug()
return {
    paths: allItems.edges.map(({ node }:any) => `/items/${node.id}`) || [],
    fallback: true,
}
}