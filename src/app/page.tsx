'use client'
import './global.css'
import { FormEvent, useState } from "react"
import Image from "next/image"
import { Header } from "./components/Header"
import styles from './Home.module.css'

interface UserInformations {
  bio: string
  avatar_url: string
  name: string
  id: number
  login: string
}

export default function Home() {
  const [user, setUser] = useState<UserInformations[]>([])

  async function loadUser(e: FormEvent, search: string) {
    e.preventDefault()

    const response = await fetch(`https://api.github.com/users/${search}`)

    const data = await response.json()
  
    const { bio, avatar_url, name, id, login } = data

    const users: UserInformations = {
      bio,
      avatar_url,
      name,
      id,
      login
    }


    setUser([users])
  }

  return (
    <>
      <Header loadUser={loadUser} />
      <article className={styles.apiContainer}>
        <section className={styles.card}>
          {user.map(users => {
            return (
              <div className={styles.cardContainer} key={users.id}>
                <div className={styles.images}>
                  <Image src={users.avatar_url} alt="" width={70} height={70} className={styles.avatar} />
                </div>
                <h2>{users.name}</h2>
                <p>{users.bio}</p>
                <div className={styles.link}>
                  <a href={`https://github.com/${users.login}`}>Link to perfil</a>
                </div>
              </div>
            )
          })}
        </section>

        <section></section>
      </article>
    </>
  )
}
