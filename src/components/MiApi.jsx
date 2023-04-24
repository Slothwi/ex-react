import { useState } from 'react'
import useData from './useData'
import Tarjeta from './Tarjeta'


function MiApi() {
    const { data, loading } = useData()

    const [search, setSearch] = useState('')
    const handleSearch = e => {
        setSearch(e.target.value)
    }

    const searchResult = !search
        ? data
        : data.filter(character => character.name.toLowerCase().includes(search.toLowerCase())
        )

    return (
        <div>
            <nav className='d-flex sticky-top justify-content-evenly align-items-center bg-primary text-white mb-4'>
                <h1>Marvel Universe</h1>
                <hr />
                <div>
                    <input
                        className='form-control'
                        style={{ width: '18rem' }}
                        type='text'
                        placeholder='Busqueda'
                        aria-label='search'
                        value={search}
                        onChange={handleSearch} />
                </div>
            </nav>
            <div className='d-flex flex-wrap'>
                {searchResult.map(character => (
                    <Tarjeta
                        key={character.id}
                        {...character} />

                ))}

            </div>
            <div className='d-flex justify-content-center bg-primary text-white p-2'>Marvel Universe 2023
            </div>
        </div>

    )
}
export default MiApi
