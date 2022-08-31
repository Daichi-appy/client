import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies, Cookies } from 'react-cookie';
import { redirect } from 'next/dist/server/api-utils';


export default function InputName() {
  const [cookies, setCookie] = useCookies(['name'])
  const [name, setName] = useState('')
  const router = useRouter()

  const addCookie = (newName) => {
    const day = new Date()
    day.setDate(day.getDate() + 21)
    setCookie('name', newName, { path: '/', expires: day })
  }

  const attachName = (e) => {
    setName(() => e.target.value)
  }

  useEffect(() => {
    // if cookies.name.exist?
    // setTimeout(router.push('/'), 5000)
    // console.log()
  }, [])

  const redirectIndex = () => {
    router.push('/')    
  }

  return (
    <div>
      <h1 className='text-2xl text-indigo-500'>表示名を入力してください</h1>
      <input
          type="text"
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          placeholder='名前'
          onChange={ (e) => attachName(e)}
          value={name}
      />
      <button
        onClick={() => { addCookie(name); redirectIndex(); }}
        className="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2"
        >
        プラポを始める
      </button>
    </div>
    ) 
}