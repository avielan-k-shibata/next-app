import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
    query DetailItem($id: ID!){
      item(id: $id){
        data{
          id
          attributes{
            name
          }
        }
      }
    }
`;
export const DetailContent = ({id}: any) => {
    const { data, loading, error } = useQuery(QUERY, {
        variables: {id: id},
      });
    if (loading) return <p>Loading...</p>;
    if (error) {
    console.error(error);
    return null;
    }
    return (
        <div >
           333
        </div>
    )
}  