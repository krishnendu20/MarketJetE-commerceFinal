import Link from "next/link";
import SessionCheck from "@/component/sessioncheck";
import MyHeader from "@/component/header";
// import MyLayout from "./layout";
import Session from "@/component/session";

export default function AdminDashboard() {

 return (
 <>
<SessionCheck/>
 <div class="flex flex-col bg-slate-900 flex-grow">
 <MyHeader title="AdminDashboard"/>
 <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-blue-700">

 <h1 class="text-lg font-medium"> <Session/></h1> 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Newsportal Management System</h2>
 <button class="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-300">

    <img class="w-11 h-11 rounded-full" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/284301040_3144004375855080_4680837621524519063_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeES6YxwxxOaDh4qoZYKi8pYzaw0uNaDQLPNrDS41oNAszomxVqjWbOsZ9O0I5NtSKH5ugOkl6F1sbkxs0RXI-34&_nc_ohc=pdL27b5QGgEAX_Fea2V&_nc_ht=scontent.fdac24-1.fna&oh=00_AfAUOPQykWhgyssq-KVHRjtPiowksCV7oYattBQkdgbnsw&oe=64662704" alt="Rounded avatar"/>

 </button>

 </div>

 </div>

<div class="flex w-screen h-screen text-gray-700">

<div class="flex flex-col w-60 bg-cyan-950 border-r border-emerald-900">

 <div class="flex items-center justify-between w-full h-16 px-4 border-b border-blue-700 "><h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-emerald-500">Admin Dashboard</h2> </div> 

 <div class="flex flex-col flex-grow p-4 overflow-auto">

 <Link href="/admin/dashboard/getauthor" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

 <span class="leading-none">Show All Authors</span>

 </Link>

 <Link href="/admin/dashboard/findauthor" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

<span class="leading-none">Search Author</span>

</Link>

 <Link href="/admin/dashboard/insertauthor" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

 <span class="leading-none">Insert Author</span>

 </Link>

 <Link href="/admin/dashboard/updateauthor" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

<span class="leading-none">Update Author</span>

</Link>

<Link href="/admin/dashboard/deleteauthor" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

<span class="leading-none">Delete Author</span>

</Link>

 <Link href="/admin/dashboard/geteditor" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

 <span class="leading-none">Show All Editors</span>

 </Link>

 <Link href="/admin/dashboard/findeditor" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

<span class="leading-none">Search Editor</span>

</Link>

 <Link href="/admin/dashboard/inserteditor" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

 <span class="leading-none">Insert Editor</span>

 </Link>

 <Link href="/admin/dashboard/updateeditor" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

<span class="leading-none">Update Editor</span>

</Link>

 <Link href="/admin/dashboard/deleteeditor" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

 <span class="leading-none">Delete Editor</span>

 </Link>

 <Link href="/admin/dashboard/getuser" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

 <span class="leading-none">Show All Users</span>

 </Link>

 <Link href="/admin/dashboard/finduser" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

<span class="leading-none">Search User</span>

</Link>

 <Link href="/admin/dashboard/insertuser" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

 <span class="leading-none">Insert User</span>

 </Link>

 <Link href="/admin/dashboard/updateuser" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

<span class="leading-none">Update User</span>

</Link>

 <Link href="/admin/dashboard/deleteuser" className="flex items-center flex-shrink-0 h-10 px-2 text-emerald-100 font-medium rounded hover:bg-slate-900" >

 <span class="leading-none">Delete User</span>

 </Link>

 </div>

 </div>

 <div class="flex-grow p-4 overflow-auto bg-slate-900">

 <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://thumbs.dreamstime.com/b/big-news-newspaper-headline-intro-loops-newspapers-coming-off-press-cover-page-spins-first-second-blank-loop-then-43661397.jpg" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://img.freepik.com/free-photo/fake-news-headline-newspaper_53876-24882.jpg" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0lLeEDdq_-dgsRvGuCkYOXXUQvyJfaetrvMtgE48FbItLKTygV8QxNylDHvG9Uj1Jnoo&usqp=CAU" />
      </div>
    </div>
  </div>
</div>
<br></br>
<ul class="flex justify-center">
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
      class="mr-1 h-5 w-5 text-danger">
      <path
        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  </li>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
      class="mr-1 h-5 w-5 text-danger">
      <path
        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  </li>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
      class="mr-1 h-5 w-5 text-danger">
      <path
        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  </li>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="red"
      class="mr-1 h-5 w-5 text-danger">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  </li>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="red"
      class="mr-1 h-5 w-5 text-danger">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  </li>
</ul>
<br></br>
<center>
<div
  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
<div
  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
<div
  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
<div
  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
<div
  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
<div
  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
<div
  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
  </div>
</center>
<br></br>
<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center text-white font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4 text-white">Name</th>
              <th scope="col" class="px-6 py-4 text-white">Email</th>
              <th scope="col" class="px-6 py-4 text-white">Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
              <td class="text-white whitespace-nowrap px-6 py-4 font-medium">
                Anik
              </td>
              <td class="text-white whitespace-nowrap px-6 py-4">a@gmail.com</td>
              <td class="text-white whitespace-nowrap px-6 py-4">68732323</td>
            </tr>
            <tr
              class="text-white border-b border-primary-200 bg-primary-100 text-neutral-800">
              <td class="text-white whitespace-nowrap px-6 py-4 font-medium">
                Raju
              </td>
              <td class="text-white whitespace-nowrap px-6 py-4">r@gmail.com</td>
              <td class="text-white whitespace-nowrap px-6 py-4">68347632</td>
            </tr>
            <tr
              class="text-white border-b border-secondary-200 bg-secondary-100 text-neutral-800">
              <td class="text-white whitespace-nowrap px-6 py-4 font-medium">
                Imran
              </td>
              <td class="text-white whitespace-nowrap px-6 py-4">a@gmail.com</td>
              <td class="text-white whitespace-nowrap px-6 py-4">376982179</td>
            </tr>
            <tr
              class="text-white border-b border-success-200 bg-success-100 text-neutral-800">
              <td class="text-white whitespace-nowrap px-6 py-4 font-medium">
                Dipto
              </td>
              <td class="text-white whitespace-nowrap px-6 py-4">a@gmail.com</td>
              <td class="text-white whitespace-nowrap px-6 py-4">6763287</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
 </div>
 

 </div>

 </>

 )

}

