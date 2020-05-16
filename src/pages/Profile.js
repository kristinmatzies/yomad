import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Events from '../components/Events'

export default function Profile({
  profiles,
  deleteProfile,
  events,
  saveEvent,
  deleteEvent,
}) {
  const filteredEventsById = events.filter((event) => event.userId === 1)
  console.log(filteredEventsById)

  return (
    <Wrapper>
      {profiles.length === 1 && (
        <LinkStyled to="/createprofile">create profile</LinkStyled>
      )}
      <section>
        {profiles.map((profile, index) => (
          <ProfileContainer key={index}>
            {profile.name !== '' && (
              <>
                <img src={profile.imageSrc} alt="" />
                <ProfileText>
                  <RiDeleteBin6Line
                    className="delete-button"
                    onClick={() => deleteProfile(profile)}
                  />
                  <p className="profile_key">Name</p>
                  <p className="profile_value">{profile.name}</p>
                  <p className="profile_key">City</p>
                  <p className="profile_value">{profile.city}</p>
                  <p className="profile_key">Yogalevel</p>
                  <p className="profile_value">{profile.yogalevel}</p>
                </ProfileText>
              </>
            )}
          </ProfileContainer>
        ))}
      </section>
      <Scroller>
        {filteredEventsById
          .slice()
          .sort(
            (eventA, eventB) =>
              eventA.date.localeCompare(eventB.date) ||
              eventA.time.localeCompare(eventB.time)
          )
          .map((event, index) => (
            <ScrollContainer key={index}>
              <Events
                saveEvent={saveEvent}
                event={event}
                deleteEvent={deleteEvent}
              />
            </ScrollContainer>
          ))}
      </Scroller>
    </Wrapper>
  )
}

const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  color: var(--primary);
  padding: 4px 0;
`

const Wrapper = styled.main`
  overflow-y: scroll;
`

const ProfileContainer = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  margin-bottom: 16px;

  img {
    height: 172px;
    width: 172px;
    border-radius: 50%;
    border: 8px solid var(--quaternary);
    justify-self: center;
    align-self: center;
  }
`

const ProfileText = styled.section`
  align-self: center;
  justify-self: flex-start;
  margin-left: 12px;
  position: relative;

  .profile_key {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 0;
    color: var(--secondary);
  }

  .profile_value {
    margin: 0;
  }

  .delete-button {
    position: absolute;
    left: 100px;
    top: 4px;
    color: var(--primary);
  }
`

const Scroller = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`
const ScrollContainer = styled.section`
  flex: 0 0 90%;
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1.3fr 1fr;
  margin-right: 4px;
  background: var(--background);
  height: 100%;

  :last-child {
    flex: 0 0 100%;
  }
`
