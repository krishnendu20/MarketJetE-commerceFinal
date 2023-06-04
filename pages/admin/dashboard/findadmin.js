import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import UserLayout from '@/component/userdata';
import MyLayout from '@/component/layout';
export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: 'findadmin',
      query: { inputValue: inputValue }
    });
  }

  return (
    
    <>
         <MyLayout />
      <form onSubmit={handleFormSubmit}>
        <div class="bg-blue-600">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit" className='hover:bg-blue-900'>Search</button>
        </div>
      </form>
      {data.status == null? 
   <UserLayout data={data}/>
      : data.status }
              
    </>
    
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get('http://localhost:3001/admin/findadmin/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: {status:"Enter ID"}
    }
  };
}

}
 