import type { NextPage } from 'next'


import Layout from '../../components/templates/layout';
import { ItemsData, Item } from "../types/items"
import { useQuery } from '@apollo/client';
import { ITEMS_QUERY } from "../../components/query"
import { ItemCard } from "../../components/molecules/ItemCard"
const Index: NextPage = () => {

    const { loading, error, data } = useQuery<ItemsData>(ITEMS_QUERY);
    
    if (loading) return <Layout><p>Loading...</p></Layout>;
    if (error) return <Layout><p>Error: {JSON.stringify(error)}</p></Layout>;
    const items = data?.items.data

    return (
        <Layout>
            <div className="flex flex-wrap">
      {items?.map((item:any)=>{
          return(
            
            <ItemCard key={item.id} id={item.id} name={item.attributes.name}/>

          )
        })}
        </div>
        </Layout>

    )
}
export default Index