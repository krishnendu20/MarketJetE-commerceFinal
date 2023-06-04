import Link from "next/link"
import axios from "axios";
import Session from "@/component/session";
import SessionCheck from "@/component/sessioncheck";

export default function GetUsers({ data }) {
    
  return (
      <>
              <SessionCheck/>
        <h1 class="text-lg font-medium bg-slate-900 w-full"> <Session/></h1> 
  <div className="bg-slate-900 py-4">

<div className="container mx-auto px-6">

<h1 className="text-3xl text-center font-semibold text-white">All Editors</h1>

</div>

</div>

<div className="bg-slate-900 mx-auto px-64 py-12">

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></div>

{data.map(item => (

<div key={item.id} className="p-8 text-white font-bold bg-slate-700 rouded gray text-center rounded hover:bg-gray-300" >

<Link href={"/admin/dashboard/editor/"+item.id}>{item.name}</Link>

</div>

))}
<div>
<Link href="/admin/dashboard" class="text-white bg-gradient-to-r from-slate-600 via-slate-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-600 dark:focus:ring-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">&nbsp; Back</Link>                          

</div>
</div>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3001/admin/findeditor');
      const data = await response.data;
    
  return { props: { data } }
  }

