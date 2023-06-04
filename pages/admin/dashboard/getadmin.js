import Link from "next/link"
import axios from "axios";


export default function GetUsers({ data }) {
    
  return (
      <>
       {/* <MyLayout title="Get Users"/> */}
      <h1>All Admins</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/admin/dashboard/admin/"+item.id}>{item.name}</Link>
            </li>
        ))}
      </ul>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3001/admin/index');
      const data = await response.data;
    
  return { props: { data } }
  }