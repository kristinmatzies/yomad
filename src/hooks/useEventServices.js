import { useState, useEffect } from 'react'
import { db } from '../firebase'

export default function useEvents() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    db.collection('events').onSnapshot((snapshot) => {
      const allEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setEvents(allEvents)
    })
  }, [])
  return {
    events,
  }
}
