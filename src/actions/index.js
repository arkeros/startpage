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

import type {
  Action,
  ThunkAction,
  PromiseAction,
} from './types';

import parse from '../core/parse';


const CLOCK_FREQUENCY = 1000; // ms

export function execute(redirect) : ThunkAction {
  return (dispatch, getState) => {
    const state = getState();
    const { newTab } = state.settings;
    // TODO
    // Suggestions.add(query);
    // Suggestions.show('');


    if (newTab) window.open(redirect, '_blank');
    else window.location.href = redirect;
  };
}

export function submit(): ThunkAction {
  return (dispatch, getState) => {
    const state = getState();
    const { text } = state.input;
    const { searchDelimiter, pathDelimiter } = state.settings;

    const { redirect } = parse(text, {
      // defaultSearch,
      searchDelimiter,
      pathDelimiter,
    });
    dispatch(clearInput());
    dispatch(execute(redirect));
  };
}

function setClock(now: Date): Action {
  return {
    type: 'SET_CLOCK',
    now,
  };
}

export function setText(text: string): Action {
  return {
    type: 'SET_TEXT',
    text,
  };
}

export function addChar(char: string): ThunkAction {
  const input = document.getElementsByTagName('input')[0];
  input.focus();
  return (dispatch, getState) => {
    const state = getState();
    const { text } = state.input;
    const newText = text + char;
    dispatch(setText(newText));
    input.focus();
  };
}

export function clearInput(): Action {
  return setText('');
}

function getPendingActions(state): Array<Action> {
  const actions = [];

  // TODO more logic
  const now = new Date();
  actions.push(setClock(now));

  return actions;
}

export function initTimer(): ThunkAction {
  return (dispatch, getState) => {
    function tick() {
      const state = getState();
      const actions = getPendingActions(state);
      dispatch(actions);
    }

    setInterval(tick, CLOCK_FREQUENCY);
  };
}
