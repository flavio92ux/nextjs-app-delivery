type ICategories = {
  id: string,
  name: string
}

type IProp = {
  data: ICategories[]
}

export function PainelCategories(props: IProp) {
  return (
    <div>
      {props.data.map((item) => (
        <div className='flex'>
          <input type="checkbox" />
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  )
}