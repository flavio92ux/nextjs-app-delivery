type IList = {
  id: string,
  name: string
}

type IParams = {
  categoryId: string,
  query: string
}

export async function getCategories(): Promise<IList[] | []> {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories')

  if (response.ok) {
    const data = await response.json()
    return data
  }

  return []
}

export async function getProductsFromCategoryAndQuery(params: IParams): Promise<IList | []> {
  const urlParams = new URLSearchParams({ category: params.categoryId, q: params.query })

  const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?' + urlParams)

  if (response.ok) {
    const data = await response.json()
    return data
  }

  return []
}