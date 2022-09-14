import { useState, useEffect, useCallback } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsloading] = useState(false)

  const executeFetch = useCallback(async () => {
    setIsloading(true)

    try {
      const request = await fetch(url)
      console.log(request)
      const response = await request.json()

      if (!response) {
        setError(error)
      }
      setData(response)
    } catch (error) {
      setError(error)
    } finally {
      setIsloading(false)
    }
  }, [url, error])

  useEffect(() => {
    executeFetch()
  }, [executeFetch])

  return { data, error, isLoading }
}

export default useFetch
