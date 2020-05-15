import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

SearchFilter.propTypes = {
  onSearchFilter: PropTypes.func.isRequired,
}

export default function SearchFilter({ onSearchFilter, events }) {
  return (
    <Form>
      <SearchField>
        <Autocomplete
          options={events
            .filter(
              (event, index, self) =>
                index === self.findIndex((t) => t.city === event.city)
            )
            .map((option) => option.city)}
          renderInput={(params) => (
            <TextField
              {...params}
              className="textfield"
              label="Search your city"
              InputProps={{ ...params.InputProps, type: 'text' }}
              placeholder="Search your city"
              onSelect={onSearchFilter}
            />
          )}
        />
      </SearchField>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  height: 44px;

  .textfield {
    color: var(--primary);
    font-size: 16px;
    position: relative;
  }
`

const SearchField = styled.section`
  width: 90%;
  position: relative;
`
