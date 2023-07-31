import { InputSearch } from './components/searchBar'
import { getCategories } from './services/api'

export default async function Home() {
  const data = await getCategories()

  console.log(data)

  return (
    <div className="flex justify-center">
      <div className="w-full px-6 py-6 min-w-[300px]">
        <InputSearch myProp="Hello World" />
      </div>
    </div>
  )
}
