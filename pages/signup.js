import { useForm } from 'react-hook-form';
import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router';
import MyHeader from '@/component/header';
import Link from 'next/link';
// import SessionCheck from '../Layout/sessioncheck';

export default function Registration() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const validateFile = (value) => {
        const file = value[0];
        const allowedtypes = ["image/jpg","image/png"];

        if (!allowedtypes.includes(file.type)){
            return false;
        }
        }

    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('contact', data.username);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('address', data.address);
        formData.append('filename', data.filename[0]);
        console.log(formData);
        try {
            const response  = await axios.post("http://localhost:3001/admin/signup",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
          
            setSuccess('Registration Successfull');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Registration Unsuccessfull');
        }
    };

    return (
        <>
            <MyHeader title="Registration" />
             <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div class="px-10 py-20 mt-4 text-left bg-slate-700 shadow-lg"> 
    
    <div class="mt-0">
    <div>
              <h3 class="text-2xl font-bold text-center">Register From Here</h3>
       <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium"> {success}</span></p>
      
              <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" class="space-y-4 md:space-y-6" action="#">
              <div>
                      <label for="name" class="block">Name</label>
                        <input type="text" id="name" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"  placeholder="name" required=""
                            {...register('name', { required: true })}                
                                        />
{errors.name &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Name is required</span></p>
}
                  </div>

                  <div>
                      <label for="contact" class="block">Contact</label>
                        <input type="number" id="contact" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="contact" required=""
                            {...register('contact', { required: true })}                
                                        />
{errors.name &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Contact is required</span></p>
}
                  </div>
            <div>
                      <label for="email" class="block" >Email</label>
                        <input type="email" id="email"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                                            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                                        />
                                          {errors.email && (
                        <p>
                            {errors.email.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Email is required</span></p>

                                                    :
                                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Invalid email address</span></p>
                                                }
                        </p>
                    )}
                  </div>
                  <div>
                      <label for="password" class="block" >Password</label>
                    <input
                        type="password"
                        id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                        {...register('password', { required: true, minLength: 5 })}
                                        />
                                        {errors.password && (
                        <p>
                            {errors.password.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">password is required</span></p>
                                                :
                                                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Invalid password pattern</span></p>

                                }
                        </p>
                    )}
                  </div>
                  <div>
                 
<label for="address"class="block" >Address</label>
<input type='text' id="address"  rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address" {...register('address', { required: true })} />
                  </div>
                 <div> 
                   
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload File</label>
<input type="file" id="filename" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
{...register('filename', { })}
/>
{errors.filename && 
                    <p>
           
                </p>}      
                </div>
                          <button type="submit" class="text-white bg-gradient-to-r from-slate-600 via-slate-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-600 dark:focus:ring-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
                          <Link href="/signin" class="text-white bg-gradient-to-r from-slate-600 via-slate-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-600 dark:focus:ring-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Back</Link> 
              </form>
          </div>
      </div>
  </div>
                        
            </div>
        </>
    );
}