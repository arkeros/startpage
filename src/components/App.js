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
 */

import React from 'react';
import { connect } from 'react-redux';

import type { State } from '../reducers';
import { getColor } from '../utils/url';
import Overlay from './Overlay';
import Clock from './Clock';
import Form from './Form';
import { toggleGrid } from '../actions';


const styles = {
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'auto',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  visibility: 'visible',
  flexDirection: 'column',

  // center
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',

  //form
  padding: '1em',
  transition: 'background-color .5s',
  boxSizing: 'border-box',
}

const clockStyles = {
  display: 'block',
  marginTop: '.06em',
  fontSize: '6rem',
  letterSpacing: '.05em',
  cursor: 'pointer',
};


function App({ mode, backgroundColor }) {
  return (
    <Overlay style={{
      ...styles,
      backgroundColor,
    }}>
      <Clock style={{
        ...clockStyles,
        display: (mode === 'clock') ? 'block' : 'none',
      }} />
      <Form
        style={{ width: '100%' }}
        hidden={mode !== 'input'}
      />
    </Overlay>
  )
}

function mapStateToProps(state: State) {
  const { text, redirect } = state.input;
  const mode = (text) ? 'input' : 'clock';
  const backgroundColor = (mode === 'input') ? getColor(redirect) : 'white';
  return { mode, backgroundColor };
}

export default connect(mapStateToProps)(App);
