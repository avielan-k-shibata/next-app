

async function fetchAPI(query, { variables } = {}){

      const res = await fetch(`${process.env.DB_HOST}/graphql`, {
        method: 'POST',
        headers: {
        Authorization: `Bearer ${process.env.DB_TOKEN}`,
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

export async function getItemsForDatail(params, preview) {
  console.log(params.id, 333)
  const data = await fetchAPI(
    `
    query{
      item(id:$id){
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
      id: {
        ...(params ? params.id : { status: 'published' }),
      },
    },
  }
  )
  return data?.items
}
