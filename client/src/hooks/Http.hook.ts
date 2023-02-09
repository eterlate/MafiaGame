import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState<Boolean>(false)
    const [error, setError] = useState<unknown>()

    const request = useCallback (async (url: string, method: string = 'GET', body: Object | null  = null, headers: any = {}) =>{
        setLoading(true)
        try{
            let sBody: null | BodyInit = null
            if (body){
                sBody = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            
            const response = await fetch(url, {method, body: sBody, headers})
            const data = await response.json()
            if(!response.ok){
                throw new Error(data.message || 'Unknown request error')
            }
            
            setLoading(false)
            return data
        }catch(e){
            setLoading(false)
            setError((e as Error).message)
            throw e
        }
    }, [])

    const clearError = () => setError(null)

    return {loading, request, error, clearError}
}