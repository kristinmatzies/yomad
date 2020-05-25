import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { loadFromStorage } from '../services'

export default function useEvents() {
  const [users, setUsers] = useState([])
  const userId = loadFromStorage('profileId') || ''
  const user = users.find((user) => userId === user.id)

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
    userId,
    user,
  }
}
