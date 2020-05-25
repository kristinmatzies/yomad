import { useState, useEffect } from 'react'
import { db, storage } from '../firebase'
import useUserServices from './useUserServices'
import swal from 'sweetalert'

export default function useEvents() {
  const [events, setEvents] = useState([])
  const { user } = useUserServices()

  useEffect(() => {
    db.collection('events').onSnapshot((snapshot) => {
      const allEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setEvents(allEvents)
    })
  }, [])

  function saveEvent(event) {
    if (user) {
      let index = user.saved.indexOf(event.id)
      index >= 0
        ? db
            .collection('users')
            .doc(user.uid)
            .update({
              saved: [
                ...user.saved.slice(0, index),
                ...user.saved.slice(index + 1),
              ],
            })
            .then(() => {
              console.log('event saved')
            })
            .catch((err) =>
              alert('Something went wrong. Please try again later.', err)
            )
        : db
            .collection('users')
            .doc(user.uid)
            .update({ saved: [...user.saved, event.id] })
            .then(() => {
              console.log('event saved')
            })
            .catch((err) =>
              alert('Something went wrong. Please try again later.', err)
            )
    } else {
      db.collection('events')
        .doc(event.id)
        .update({ saved: !event.saved })
        .then(() => console.log('Save state updated!'))
        .catch((error) =>
          alert('Oops something went wrong. Try again later.', error)
        )
    }
  }

  function deleteEvent(event) {
    const image = storage.ref(`images/${event.imageTitle}`)
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this event!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        db.collection('events')
          .doc(event.id)
          .delete()
          .then(
            swal('Ok. Your event has been deleted!', {
              icon: 'success',
            })
          )
          .catch((error) =>
            alert('Oops something went wrong. Try again later.', error)
          )
        event.imageTitle !== '' &&
          image
            .delete()
            .then(() => console.log('Image successfully deleted!'))
            .catch((error) => console.log('Image delete failed', error))
      } else {
        swal('Your event is safe!')
      }
    })
  }

  return {
    events,
    saveEvent,
    deleteEvent,
  }
}
