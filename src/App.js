import React, { useState, useEffect } from 'react'
import GlobalStyles from './common/GlobalStyles'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import EventList from './pages/EventList'
import FooterNav from './components/FooterNav'
import CreateEvent from './pages/CreateEvent'
import { useHistory } from 'react-router-dom'
import { storage } from './firebase'
import { db } from './firebase'
import swal from 'sweetalert'

export default function App() {
  const [events, setEvents] = useState([])
  const [selectedCity, setSelectedCity] = useState('')
  const [isFiltered, setIsFiltered] = useState(false)
  const [previewImage, setPreviewImage] = useState({
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/yomad-2e8f7.appspot.com/o/images%2Fdefault_img.jpg?alt=media&token=903c68aa-aa04-405a-a39e-3c62097d8bb4',
    imageName: '',
  })
  const [eventEntry, setEventEntry] = useState({
    city: '',
    place: '',
    date: '',
    time: '',
    yogastyle: '',
    details: '',
  })

  const history = useHistory()

  useEffect(() => {
    db.collection('events').onSnapshot((snapshot) => {
      const allEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setEvents(allEvents)
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
            isFiltered={isFiltered}
            deleteEvent={deleteEvent}
          />
        </Route>
        <Route path="/create">
          <CreateEvent
            eventEntry={eventEntry}
            updateEventEntry={updateEventEntry}
            submitNewEvent={submitNewEvent}
            updateImage={handleImageUpload}
            previewImage={previewImage}
          />
        </Route>
        <Route path="/saved">
          <EventList
            events={events}
            selectedCity={selectedCity}
            saveEvent={saveEvent}
            onSearchFilter={setSearchFilter}
            isFiltered={isFiltered}
            deleteEvent={deleteEvent}
            onlySaved={true}
          />
        </Route>
      </Switch>
      <FooterNav />
    </>
  )

  function setSearchFilter(event) {
    setSelectedCity(event.target.value)
    setIsFiltered(true)
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

  function updateEventEntry(event) {
    setEventEntry({ ...eventEntry, [event.target.name]: event.target.value })
  }

  function handleImageUpload(event) {
    const image = event.target.files[0]
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        alert('An error occurred, please try again.')
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setPreviewImage({ imageUrl: fireBaseUrl, imageName: image.name })
          })
      }
    )
  }

  function submitNewEvent(event) {
    event.preventDefault()
    const newEvent = {
      imageTitle: previewImage.imageName,
      imageSrc: previewImage.imageUrl,
      city: eventEntry.city,
      place: eventEntry.place,
      date: eventEntry.date,
      time: eventEntry.time,
      yogastyle: eventEntry.yogastyle,
      details: eventEntry.details,
      saved: true,
    }

    db.collection('events').add(newEvent)
    setEventEntry({
      city: '',
      place: '',
      date: '',
      time: '',
      yogastyle: '',
      details: '',
    })
    setPreviewImage('')
    history.push('/')
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
}
