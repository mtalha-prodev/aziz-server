import React from 'react'

const Dropdown = () => {
const country =[
    {
        name:'PK',
        icon:'',

    },
    {
        name:'IN',
        icon:''
    },
    {
        name:'UAE',
        icon:''
    },
]
  return (
    <div className='border rounded p-2 bg-gray-50 w-24 absolute top-10 right-0 ' >
    {
        country.map((item,index)=>(
            <div key={index} >
            <i>{item.icon}</i>
            <p className='text-black font-medium text-sm' >{item.name}</p>
            </div>
            )
        )
    }
    </div>
  )
}

export default Dropdown
