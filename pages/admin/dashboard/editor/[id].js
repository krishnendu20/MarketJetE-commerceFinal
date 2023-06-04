import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'
import Session from "@/component/session";
import SessionCheck from "@/component/sessioncheck";
// import MyLayout from "@/component/layout";

export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <> 
              <SessionCheck/>
        <h1 class="text-lg font-medium bg-slate-900 w-full"> <Session/></h1> 
        
      {/* <MyLayout title="Author"/> */}
      <div class="relative overflow-x-auto bg-slate-900 shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-white-500 dark:text-white-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-12 py-3 bg-gray-50 dark:bg-gray-800">
                <h1>Id: {data.id}</h1>
                </th>
                <th scope="col" class="px-6 py-3">
                <h1>Name: {data.name}</h1>
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                <h1>Contact: {data.contact}</h1>
                </th>
                <th scope="col" class="px-6 py-3">
                <h1>Email: {data.email}</h1>
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                <h1>Address: {data.address}</h1>
                </th>
                <th scope="col" class="px-6 py-3">
                <h1>Picture: </h1>
                <Image src={"http://localhost:3001/editors/"+data.filename} alt="me" width="150" height="150" />
                </th>
            </tr>
        </thead>
     <br></br><br></br><br></br><br></br>
     <button type="button" class="px-6 py-3 bg-gray-50 dark:bg-white-800" onClick={() => router.back()}>
      Back
    </button>
    </table>
    </div>
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('http://localhost:3001/admin/findeditor/'+id);
    const data = await response.data;
   
return { props: { data } }
}
