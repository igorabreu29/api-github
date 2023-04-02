'use client'
import { FormEvent, useState } from "react"
import styles from './Search.module.css'

interface SearchProps {
    loadUser: (e: FormEvent, search: string) => Promise<void>
}   

export function Search({loadUser}: SearchProps) {
    const [search, setSearch] = useState('')

    return (
        <form className={styles.SearchContainer} onSubmit={(e) => loadUser(e, search)}>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
            <button>Clique</button>
        </form>
    )
}