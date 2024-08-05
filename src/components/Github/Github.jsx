import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() 
{
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/fadi0950')
    //       .then(res => res.json())
    //       .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
          
    //   }, [])

    const data = useLoaderData()

  return (

    <>
     <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Name : {data.name} 
    <img src={data.avatar_url} alt="Image Not Found" width={300} />
    <h3>{data.bio}</h3>
    </div>

   
    </>
   
    
  )
}
export default Github
export const infoLoader = async () => {
   
    const res =  await fetch('https://api.github.com/users/fadi0950')
    return res.json()
    }
