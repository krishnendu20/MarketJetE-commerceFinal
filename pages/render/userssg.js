export default function SSG({ data }) {
    
    return (
        <>
        <h1>This SSG request!</h1>
        <ul>
        {data.map(item => (
            <li key={item.id}>
             <p>Name: {item.name}</p> 
              </li>
          ))}
        </ul>
      </>
    );
    }
    
   export async function getStaticProps() {
   
        const response = await fetch('http://localhost:3001/admin/finduser');
        const data = await response.json();
      
    return { props: { data } }
    }