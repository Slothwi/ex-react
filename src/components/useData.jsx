import { useState, useEffect } from 'react'
import getData from './getData'

const useData = () => {
    const [data, setData] = useState( [] )
    const [loading, setLoading] = useState( true )

const getCharacters = async () => {
    const characters = await getData()
    setData( characters )
    setLoading( false )
}

useEffect( () => {
    getCharacters()
}, [] )

return {
    data,
    loading
}
}

export default useData