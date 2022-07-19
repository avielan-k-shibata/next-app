
const token = 'b4e349da21812b3469514026d163b160f941845f86f7f5d2972f9c6757ba5f54800af30a7cc19883bce0eac97423be75266dda504f99e3422d8b0ae5d0865f994cad9cdc3c65d097a7fc2f5c7724ef6d0b8322f19fb90fdcccd16abdd79b0a2e5282adb663d2db8f2491d9603530726fb1eb06fcbd77df35c97b682e94e3a7bc';

async function fetchAPI(query, { variables } = {}){
      const res = await fetch(`http://localhost:1337/graphql`, {
        method: 'POST',
        headers: {
        Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })
    
      const json = await res.json()
      if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
      }
    
      return json.data
}


export async function getAllItemsForHome(preview) {
    const data = await fetchAPI(
      `
      query{
        items{
          data{
            id
            attributes{
              name
            }
          }
        }
      }
    `,
      {
        variables: {
          where: {
            ...(preview ? {} : { status: 'published' }),
          },
        },
      }
    )
    return data?.items.data
  }

  export async function getAllItemsWithSlug(preview) {
    const data =  await fetchAPI(`
    query{
        items{
          data{
            id
            attributes{
              name
            }
          }
        }
      }
    `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: 'published' }),
        },
      },
    })
    return data?.items.data | null
  }