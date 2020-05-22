import { useState, useEffect } from 'react'
import { db } from '../firebase'

export default function useEvents() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    db.collection('users').onSnapshot((snapshot) => {
      const allUsers = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }))
      setUsers(allUsers)
    })
  }, [])

  return {
    users,
  }
}
