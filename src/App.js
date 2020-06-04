import React from 'react'
import { Route, Switch } from 'react-router-dom'
import useEventServices from './hooks/useEventServices'
import useUserServices from './hooks/useUserServices'
import Header from './components/Navigation/Header'
import EventList from './pages/EventList'
import FooterNav from './components/Navigation/FooterNav'
import CreateEvent from './pages/CreateEvent'
import { db, storage } from './firebase'
import swal from 'sweetalert'
import Profile from './pages/Profile'
import CreateProfile from './pages/CreateProfile'

export default function App() {
  const { events } = useEventServices()
  const { users, userId, user } = useUserServices()
  const filteredEventsByUserId = events.filter(
    (event) => event.userId === userId
  )

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <EventList
            events={events}
            users={users}
            user={user}
            userId={userId}
            saveEvent={saveEvent}
            deleteEvent={deleteEvent}
          />
        </Route>
        <Route path="/create">
          <CreateEvent userId={userId} />
        </Route>
        <Route path="/saved">
          <EventList
            events={events}
            users={users}
            user={user}
            userId={userId}
            saveEvent={saveEvent}
            deleteEvent={deleteEvent}
            onlySaved={true}
          />
        </Route>
        <Route path="/profile">
          <Profile
            users={users}
            user={user}
            userId={userId}
            filteredEventsByUserId={filteredEventsByUserId}
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

  function deleteProfile(user) {
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
        filteredEventsByUserId.forEach((event) =>
          db
            .collection('events')
            .doc(event.id)
            .delete()
            .then(() => console.log('FilteredEvent deleted'))
            .catch((error) => console.log('Delete filteredEvent failed', error))
        )

        filteredEventsByUserId.forEach(
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
