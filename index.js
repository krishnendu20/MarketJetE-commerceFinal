import MyLayout from "./component/layout"

export default function Home() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  return (
    <>
    <MyLayout title="Home"/>
    <h1 className="font-semibold text-x1 tracking-tight">Home Page</h1>
    <h3>Loren Posem .....</h3>
    <ul >
        {names.map((name) => (
          <li key={name}> {name} </li>
        ))}
      </ul>
    </>
  )
}
