import React, { useState, useEffect } from 'react'
import GlobalStyles from './common/GlobalStyles'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import EventList from './pages/EventList'
import FooterNav from './components/FooterNav'
import CreateEvent from './pages/CreateEvent'
import { storage } from './firebase'
import { db } from './firebase'
import swal from 'sweetalert'
import Profile from './pages/Profile'
import CreateProfile from './pages/CreateProfile'

export default function App() {
  const [events, setEvents] = useState([])
  const [profiles, setProfiles] = useState([])
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
    db.collection('profiles').onSnapshot((snapshot) => {
      const allProfiles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setProfiles(allProfiles)
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
          <CreateEvent profiles={profiles} />
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
            profiles={profiles}
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

  function deleteProfile(profile) {
    const image = storage.ref(`profile/${profile.imageTitle}`)
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this profile!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        db.collection('profiles')
          .doc(profile.id)
          .delete()
          .then(
            swal('Ok. Your profile has been deleted!', {
              icon: 'success',
            })
          )
          .catch((error) =>
            alert('Oops something went wrong. Try again later.', error)
          )
        profile.imageTitle !== '' &&
          image
            .delete()
            .then(() => console.log('Image successfully deleted!'))
            .catch((error) => console.log('Image delete failed', error))
      } else {
        swal('Your profile is safe!')
      }
    })
  }
}
