import { useState, useEffect } from 'react'

export const usePersist = STORAGE_KEY => {
  const [books, setBooks ] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    const initialValue = JSON.parse(saved)
    return initialValue || []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
    // eslint-disable-next-line
  }, [books])

  return [books, setBooks]
}
