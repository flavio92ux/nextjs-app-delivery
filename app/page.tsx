import { InputSearch } from './components/InputSearch'
import { PainelCategories } from './components/PainelCategories'
import { getCategories } from './services/api'

export default async function Home() {
  const data = await getCategories()

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-2'>
        <div className='border-2'>
          <PainelCategories data={data} />
        </div>
      </div>
      <div className='col-span-10'>
        <div className="flex justify-center">
          <div className="w-full px-6 py-6 min-w-[300px]">
            <InputSearch myProp="Hello World" />
          </div>
        </div>
      </div>

    </div>


  )
}
