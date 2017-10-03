/**
 * Copyright (C) 2017 Rafael Arquero (@arkeros)
 *
 * This file is part of Startpage tilde.
 *
 * Startpage tilde is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Startpage tilde is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Startpage tilde.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux';

import Overlay from './Overlay';
import { setText } from '../actions';


const styles = {
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'auto',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  visibility: 'hidden',

  // center
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',

  //form
  padding: '1em',
  background: '#111',
  transition: 'background-color .5s',
  boxSizing: 'border-box',
  zIndex: 2,
}

const inputStyles = {
  fontSize: '3em',
  width: '100%',
  marginBottom: 20,
  // fontSize: '1.5em',
  fontWeight: 900,
  letterSpacing: '.05em',
  textTransform: 'uppercase',
};


function Form({ style, text, handleChange }) {
  return (
    <Overlay style={{ ...styles, ...style }}>
      <input
        style={inputStyles}
        type="text"
        name="q"
        value={text}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
      />
    </Overlay>
  )
}

// TODO simplify...
function mapStateToProps(state: State) {
  const { text } = state.input;
  return { text };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange(event) {
      dispatch(setText(event.target.value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
