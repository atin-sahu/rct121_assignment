import { Card } from "./components/Card"

function App() {
  
  const data = [
    {
      avtar:"https://randomuser.me/api/portraits/med/men/6.jpg",
      name:"atin",
      number:"1111111111111",
      id:1
    },
    {
      avtar:"https://randomuser.me/api/portraits/med/women/34.jpg",
      name:"ritul",
      number:"22222222222",
      id:2
    },
    {
      avtar:"https://randomuser.me/api/portraits/med/men/71.jpg",
      name:"manjeet",
      number:"33333333333",
      id:3
    },{
      avtar:"https://randomuser.me/api/portraits/med/men/75.jpg",
      name:"ankush",
      number:"4444444444",
      id:4
    }
  ]

  return (
    <div>
      {data.map(e =>(<Card props={e}></Card>))}
    </div>
  )
}

export default App
