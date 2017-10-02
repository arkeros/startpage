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

const CLOCK_FREQUENCY = 1000; // ms


function setClock(now): Action {
  return {
    type: 'SET_CLOCK',
    now,
  };
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
