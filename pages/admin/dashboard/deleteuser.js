import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import Session from '@/component/session';
import SessionCheck from '@/component/sessioncheck';

export default function Delete() {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const [inputValue, setInputValue] = useState();
    const router = useRouter();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        router.push({
            pathname: 'deleteuser',
            query: { inputValue: inputValue }
        });
    }

    return (
        <>
                <SessionCheck/>
        <h1 class="text-lg font-medium bg-slate-900 w-full"> <Session/></h1> 
        <section class="bg-gray-50 dark:bg-gray-900">
            {success}

            <form onSubmit={handleFormSubmit}>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Delete User
              </h1>    
                <label htmlFor="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Enter ID: </label> <></>
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={inputValue} onChange={handleInputChange} />
                
                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Delete</button> <br></br>
                <Link href="/admin/dashboard">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Return</Link> <br></br>
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
        const response = await axios.delete('http://localhost:3001/admin/deleteuser/' + inputValue);
        const data = await response.data;
        setSuccess("Deleted Successfuly")

    } catch (error) {

        return {
            props: {
                data: { status: "Invalid ID" }
            }
        };
    }
}

