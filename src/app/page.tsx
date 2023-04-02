'use client'
import { FormEvent, useState } from "react"
import './global.css'
import { Search } from "./components/Search"

interface UserProps {
  bio: string
  avatar_url: string
  name: string
  id: number
  login: string
}

export default function Home() {
  const [user, setUser] = useState<UserProps[]>([])

  async function loadUser(e: FormEvent, search: string) {
    e.preventDefault()

    const response = await fetch(`https://api.github.com/users/${search}`)
    const datas = await response.json()
  
    const { bio, avatar_url, name, id, login } = datas

    const users: UserProps = {
      bio,
      avatar_url,
      name,
      id,
      login
    }

    setUser([users])
  }

  return (
    <main>
      <Search loadUser={loadUser} />
      <div className="map-container">
        {user.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.avatar_url} alt="" width={170} height={150} />
              <h2>Nome: {item.name}</h2>
              <p>{item.bio}</p>
              <a href={`https://github.com/${item.login}`} target="_blank">Link do perfil</a>
            </div>
          )
        })}
      </div>
    </main>
  )
}
