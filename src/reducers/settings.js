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

import type { Action } from '../actions/types';


export type SettingsState = {
  newTab: boolean,
  // defaultSearch: string,
  searchDelimiter: string,
  pathDelimiter: string,
};

const initialState: SettingsState = {
  newTab: true,
  // defaultSearch: 'https://encrypted.google.com/search?q=',
  searchDelimiter: '?',
  pathDelimiter: '/',
};


export default function user(
  state: SettingsState = initialState,
  action: Action,
): SettingsState {
  switch (action.type) {

    default:
      return state;
  }
}
