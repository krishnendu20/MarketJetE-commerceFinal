import Link from "next/link"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"
import Session from "@/component/session";
import SessionCheck from "@/component/sessioncheck";

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export default function UpdateEditor() {
    const [id, setid] = useState('')
    const [name, setName] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(id)
        console.log(name)

        try {
            const response = await axios.put("http://localhost:3001/admin/updateeditor/"+id, { name }, config)
            // console.log("res: " + response.data)
            // console.log("update successful")
            console.log("success22: " + success.message)
            setSuccess("Updated Successfully")

            sessionStorage.setItem('name', response.data);
            // router.push('/agent_dashboard');

        } catch (error) {
            console.log("error22: " + error.message)
            setError("Invalid")
            
        }
    }

    return (
        <>
                <SessionCheck/>
        <h1 class="text-lg font-medium bg-slate-900 w-full"> <Session/></h1> 
            <div>
            <section class="bg-gray-50 dark:bg-gray-900">
                    {success}
                    <form onSubmit={handleSubmit}>
               
              <div>
            <div>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Update Editor
              </h1>    
                                <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >ID: </label>
                                <input type="id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={id} onChange={(e) => setid(e.target.value)} />
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Name: </label>

                                <input type="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" value={name} onChange={(e) => setName(e.target.value)} />

                            </div>
                          
                            <div >

                            </div>
                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                            {error &&
                                <div>

                                    <p ><span >{error}</span></p>
                                </div>
                            }
                            <br></br>

                           <div class="center"> <Link href="/admin/dashboard"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Return </Link>
                           </div>
                        </div>
                        </div>
                </div>
            </div>

                    </form>

                </section>

            </div>
            
        </>
    )
}