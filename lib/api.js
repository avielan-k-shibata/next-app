

async function fetchAPI(query, { variables } = {}){

      const res = await fetch(`${process.env.NEXT_PURLIC_DB_HOST}/graphql`, {
        method: 'POST',
        headers: {
        Authorization: `Bearer ${process.env.NEXT_PURLIC_DB_TOKEN}`,
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
  console.log(preview,3333)

    const data = await fetchAPI(
      `
      query Items{
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

export async function getItemsForDatail(preview) {
  console.log(preview.id,515)
  const data = await fetchAPI(
    `
    query DetailItem{
      item(id: $id){
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
      id: preview.id,
    },
  }
  )
  return data?.items
}
