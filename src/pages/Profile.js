import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Events from '../components/Events'

Profile.propTypes = {
  users: PropTypes.array,
  userId: PropTypes.string,
  saveEvent: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
}

export default function Profile({
  users,
  user,
  userId,
  filteredEventsByUserId,
  saveEvent,
  deleteProfile,
  deleteEvent,
}) {
  return (
    <Wrapper>
      {userId === '' && (
        <InfoStyled>
          Create your own profile:
          <LinkStyled to="/createprofile" data-cy="create_profile_link">
            Click here
          </LinkStyled>
        </InfoStyled>
      )}
      {users.map((user, index) => (
        <ProfileContainer key={index}>
          {user.id === userId && (
            <>
              {user.imageSrc === '' ? (
                <img src="./img/user_default.png" alt="" />
              ) : (
                <img src={user.imageSrc} alt="" />
              )}
              <ProfileText>
                <button
                  data-cy="delete_profile"
                  className="delete_button"
                  onClick={() => deleteProfile(user)}
                >
                  x
                </button>
                <p className="profile_title">{user.name}</p>
                <span className="profile_key">from</span>
                <span className="profile_value">{user.city}</span> <br />
                <span className="profile_key">being a Yoga</span>
                <span className="profile_value">{user.yogalevel}</span>
              </ProfileText>
            </>
          )}
        </ProfileContainer>
      ))}
      {userId !== '' && <h2 className="my_event_headline">My Yoga Sessions</h2>}
      <Scroller>
        {filteredEventsByUserId
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
                users={users}
                userId={userId}
                user={user}
              />
            </ScrollContainer>
          ))}
      </Scroller>
    </Wrapper>
  )
}

const LinkStyled = styled(NavLink)`
  color: var(--primary);
  margin-left: 8px;
  cursor: default;
`

const Wrapper = styled.main`
  overflow-y: scroll;

  .my_event_headline {
    color: var(--primary);
    font-size: 20px;
    padding-left: 12px;
    margin-bottom: 0;
  }
`

const InfoStyled = styled.p`
  padding: 12px;
`

const ProfileContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  margin-bottom: 4px;
  background: var(--background);
  margin-left: 4px;

  img {
    align-self: center;
    justify-self: flex-start;
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
`

const ProfileText = styled.section`
  align-self: center;
  justify-self: flex-start;
  margin-left: 12px;
  position: relative;

  .profile_title {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
  }

  .profile_key {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    margin: 4px 4px 0 0;
    color: var(--secondary);
  }

  .profile_value {
    margin: 0;
  }

  .delete_button {
    position: absolute;
    left: 108px;
    top: -20px;
    color: var(--primary);
    border-radius: 50%;
    border: none;
    height: 24px;
    width: 24px;
    text-align: center;
    background: var(--quaternary);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.4), inset 0 0 1px 1px white;
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
