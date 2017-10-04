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

const protocolRegex = /^[a-zA-Z]+:\/\//i;
const urlRegex = /^((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)$/i;

/**
 * Given an input text, returns the corresponding redirected url.
 */
export default function parse(text: string, options): string {
  const { defaultSearch } = options;

  if (text.match(urlRegex)) {
    const hasProtocol = text.match(protocolRegex);
    return hasProtocol ? text : 'http://' + text;
  } else {
    return defaultSearch + encodeURIComponent(text);
  }
}
