import { useState, useEffect, useCallback } from 'react'
import Cookies from 'universal-cookie';

const fetchData = async (url, opts) => {
    const res = await fetch(url, opts)
    const json = await res.json()
    const cookies = new Cookies();

    // For the thumbnail image
    const data = json.map(item => {
        let newItem = item
        newItem["thumbnail"] = `https://picsum.photos/id/${item.id}/367/267`
        newItem["name"] = cookies.get('named-' + item.id) ?? `Image #${item.id}`
        return newItem
    })
    
    return data
}

export function useFetch(url, opts) {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    
    const handleFetch = useCallback(() => {
        setLoading(true)
        
        fetchData(url, opts)
        .then((res) => {
            setResponse(res)
            setLoading(false)
        })
        .catch(() => {
            setHasError(true)
            setLoading(false)
        })
    }, [url, opts])
    
    useEffect(() => {
        handleFetch()
    }, [handleFetch])
    
    return [ response, loading, hasError, handleFetch ]
}