import React, { useState, useEffect } from 'react'
import GlobalStyles from './common/GlobalStyles'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import EventList from './pages/EventList'
import FooterNav from './components/FooterNav'
import CreateEvent from './pages/CreateEvent'
import { db, storage } from './firebase'
import swal from 'sweetalert'
import Profile from './pages/Profile'
import CreateProfile from './pages/CreateProfile'
import { loadFromStorage } from './services'

export default function App() {
  const [events, setEvents] = useState([])
  const [users, setUsers] = useState([])
  const [selectedCity, setSelectedCity] = useState('')

  useEffect(() => {
    db.collection('events').onSnapshot((snapshot) => {
      const allEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setEvents(allEvents)
    })
  }, [])

  useEffect(() => {
    db.collection('users').onSnapshot((snapshot) => {
      const allUsers = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }))
      setUsers(allUsers)
    })
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <EventList
            events={events}
            selectedCity={selectedCity}
            saveEvent={saveEvent}
            onSearchFilter={setSearchFilter}
            deleteEvent={deleteEvent}
          />
        </Route>
        <Route path="/create">
          <CreateEvent users={users} />
        </Route>
        <Route path="/saved">
          <EventList
            events={events}
            selectedCity={selectedCity}
            saveEvent={saveEvent}
            onSearchFilter={setSearchFilter}
            deleteEvent={deleteEvent}
            onlySaved={true}
          />
        </Route>
        <Route path="/profile">
          <Profile
            users={users}
            events={events}
            deleteProfile={deleteProfile}
            saveEvent={saveEvent}
            deleteEvent={deleteEvent}
          />
        </Route>
        <Route path="/createprofile">
          <CreateProfile />
        </Route>
      </Switch>
      <FooterNav />
    </>
  )

  function setSearchFilter(event) {
    setSelectedCity(event.target.value)
  }

  function saveEvent(event) {
    db.collection('events')
      .doc(event.id)
      .update({ saved: !event.saved })
      .then(() => console.log('Save state updated!'))
      .catch((error) =>
        alert('Oops something went wrong. Try again later.', error)
      )
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

  function deleteProfile(user) {
    const userId = loadFromStorage('profileId') || ''
    const filteredEvents = events.filter((event) => event.userId === userId)

    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this profile!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        db.collection('users')
          .doc(user.uid)
          .delete()
          .then(
            swal('Ok. Your profile has been deleted!', {
              icon: 'success',
            })
          )
          .catch((error) =>
            alert('Oops something went wrong. Try again later.', error)
          )

        user.imageTitle !== '' &&
          storage
            .ref(`profile/${user.imageTitle}`)
            .delete()
            .then(() => console.log('Profile image deleted!'))
            .catch((error) => console.log('Profile image delete failed', error))
        localStorage.removeItem('profileId')
        filteredEvents.forEach((event) =>
          db
            .collection('events')
            .doc(event.id)
            .delete()
            .then(() => console.log('FilteredEvent deleted'))
            .catch((error) => console.log('Delete filteredEvent failed', error))
        )

        filteredEvents.forEach(
          (event) =>
            event.imageTitle !== '' &&
            storage
              .ref(`images/${event.imageTitle}`)
              .delete()
              .then(() => console.log('Image successfully deleted!'))
              .catch((error) => console.log('Image delete failed', error))
        )
      } else {
        swal('Your profile is safe!')
      }
    })
  }
}
