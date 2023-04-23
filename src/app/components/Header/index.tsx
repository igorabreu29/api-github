'use client'

import { FormEvent, useState } from 'react'
import styles from './Header.module.css'

interface HeaderProps {
    loadUser: (e: FormEvent, search: string) => Promise<void>
}

export function Header({loadUser}: HeaderProps) {
    const [search, setSearch] = useState("")

    return (
        <header className={styles.headerContainer}>
            <div>
                <h1>Api consume</h1>
            </div>

            <form 
                action="" 
                className={styles.formContainer} 
                onSubmit={(e) => loadUser(e, search)}
            >
                <label htmlFor="search">Search:</label>
                <div>
                    <input 
                        type="text" 
                        id='search' 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type='submit'>Clique</button>
                </div>
            </form>
        </header>
    )
}