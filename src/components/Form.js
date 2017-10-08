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

import { setText, submit } from '../actions';
import { getLogo } from '../utils/url';


const logostyles = {
  paddingBottom: 42,
};

const inputStyles = {
  fontSize: '3em',
  width: '100%',
  marginBottom: 20,
  // fontSize: '1.5em',
  fontWeight: 900,
  letterSpacing: '.05em',
  textTransform: 'uppercase',
};


function Form({ style, text, hidden, logo, handleChange, handleSubmit }) {
  return (
    <form style={{ textAlign: 'center', ...style }} onSubmit={handleSubmit}>
      <img
        src={logo}
        height={188}
        style={{
          ...logostyles,
          visibility: (hidden) ? 'collapse' : 'visible',
        }}
      />
      <input
        style={inputStyles}
        type="text"
        name="q"
        value={text}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
      />
    </form >
  )
}

// TODO simplify...
function mapStateToProps(state: State) {
  const { text, redirect } = state.input;
  const logo = getLogo(redirect);
  return { text, logo };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange(event) {
      dispatch(setText(event.target.value));
    },
    handleSubmit(event) {
      if (event) event.preventDefault();
      dispatch(submit());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
