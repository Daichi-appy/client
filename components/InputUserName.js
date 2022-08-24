import { useState } from "react"
import { useCookies } from 'react-cookie';

export default function InputUserName(props) {
  const [name, setName] = useState('')
  const [cookies, setCookie] = useCookies(['name']);

  const attachName = (e) => {
    setName(() => e.target.value)
  }

  const resetUser = () => {
    setName('')
  }

  const addCookie = (newName) => {
    const day = new Date()
    day.setDate(day.getDate() + 7)
    setCookie('name', newName, { path: '/', expires: day })
  }

  return (
    <div>
        <input
          type="text"
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          placeholder='名前'
          onChange={ (e) => attachName(e)}
          value={name}
        />
        <button
          onClick={() => { props.addUser(name); resetUser(); addCookie(name); }}
          className="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2"
        >
          追加
      </button>
    </div>
  )
}