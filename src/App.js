import React, { useState, useEffect } from 'react'
import GlobalStyles from './common/GlobalStyles'
import { Route, Switch } from 'react-router-dom'
import eventData from './eventlist.json'
import Header from './components/Header'
import Footer from './components/Footer'
import EventList from './components/EventList'
import Navigation from './components/Navigation'
import FilteredEvents from './components/FilteredEvents'
import CreateEvent from './components/CreateEvent'
import { saveToStorage, loadFromStorage } from './services'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router-dom'
import { storage } from './firebase'

export default function App() {
  const [events, setEvents] = useState(loadFromStorage('events') || eventData)
  const [selectedCity, setSelectedCity] = useState('')
  const [isFiltered, setIsFiltered] = useState(false)
  const [previewImage, setPreviewImage] = useState({
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/yomad-2e8f7.appspot.com/o/images%2Fdefault_img.jpg?alt=media&token=903c68aa-aa04-405a-a39e-3c62097d8bb4',
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
    saveToStorage('events', events)
  }, [events])

  return (
    <>
      <GlobalStyles />
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <EventList
            events={events}
            selectedCity={selectedCity}
            saveEvent={saveEvent}
            onSearchFilter={setSearchFilter}
          />
        </Route>
        <Route path="/saved">
          <FilteredEvents
            events={events}
            selectedCity={selectedCity}
            saveEvent={saveEvent}
            onSearchFilter={setSearchFilter}
          />
        </Route>
        <Route path="/create">
          <CreateEvent
            eventEntry={eventEntry}
            updateEventEntry={updateEventEntry}
            handleSubmit={handleSubmit}
            updateImage={handleImageUpload}
            previewImage={previewImage}
          />
        </Route>
      </Switch>
      <Footer isFiltered={isFiltered} selectedCity={selectedCity} />
    </>
  )

  function setSearchFilter(event) {
    setSelectedCity(event.target.value)
    setIsFiltered(true)
  }

  function saveEvent(index) {
    const event = events[index]
    setEvents([
      ...events.slice(0, index),
      { ...event, saved: !event.saved },
      ...events.slice(index + 1),
    ])
  }

  function updateEventEntry(event) {
    setEventEntry({ ...eventEntry, [event.target.name]: event.target.value })
  }

  function addEntry(entry) {
    const uniqueEventId = uuidv4()
    setEvents([
      ...events,
      {
        ...entry,
        saved: false,
        id: uniqueEventId,
        imageSrc: previewImage.imageUrl,
      },
    ])
    console.log(events)
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
            setPreviewImage({ imageUrl: fireBaseUrl })
          })
      }
    )
  }

  function handleSubmit(event) {
    event.preventDefault()
    addEntry(eventEntry)
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
}
