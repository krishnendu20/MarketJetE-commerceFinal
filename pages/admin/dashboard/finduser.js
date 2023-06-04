import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import UserLayout from '@/component/userdata';
import Session from '@/component/session';
import SessionCheck from '@/component/sessioncheck';
// import MyLayout from '@/component/layout';
export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: 'finduser',
      query: { inputValue: inputValue }
    });
  }

  return (
    
    <>
            <SessionCheck/>
        <h1 class="text-lg font-medium bg-slate-900 w-full"> <Session/></h1> 
         {/* <MyLayout /> */}
         <section class="bg-gray-50 dark:bg-gray-900">
      <form onSubmit={handleFormSubmit}>
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Search User
              </h1>    
        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={inputValue} onChange={handleInputChange} />
        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Search</button>
      {data.status == null? 
   <UserLayout data={data}/>
      : data.status }
              </div>
        </div>
        </div>
      </form>
       </section>       
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get('http://localhost:3001/admin/finduser/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: {status:""}
    }
  };
}
}
