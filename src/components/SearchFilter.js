import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import FilterDots from './FilterDots'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import cities from '../cities.json'

SearchFilter.propTypes = {
  onSearchFilter: PropTypes.func.isRequired,
}

export default function SearchFilter({
  onSearchFilter,
  isFiltered,
  selectedCity,
}) {
  return (
    <Form>
      <SearchField>
        <FilterDots isFiltered={isFiltered} selectedCity={selectedCity} />
        <Autocomplete
          disableClearable
          options={cities.map((option) => option.title)}
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
