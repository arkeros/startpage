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

import bangs from '../data/bangs';

const protocolRegex = /^[a-zA-Z]+:\/\//i;
const urlRegex = /^((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)$/i;


/**
 * Given an input text, returns the corresponding redirected url.
 */
export default function parse(text: string, options): string {
  const {
    searchDelimiter,
    pathDelimiter,
  } = options;
  let bang;
  let redirect;
  let mode;
  let key;

  if (text.match(urlRegex)) {
    const hasProtocol = text.match(protocolRegex);
    mode = 'url';
    redirect = hasProtocol ? text : 'http://' + text;
    const { hostname } = new URL(redirect);
    bang = bangsByHostname.get(hostname);
  } else {
    mode = 'default';
    let [searchKey, searchQuery] = text.split(searchDelimiter);
    const [pathKey, ...path] = text.split(pathDelimiter);

    if (bangs.has(text)) {
      key = text;
    }
    else if (bangs.has(searchKey)) {
      mode = 'search';
      key = searchKey;
    }
    else if (bangs.has(pathKey)) {
      mode = 'path';
      key = pathKey;
    } else {
      // default
      mode = 'search';
      key = '*';
      searchQuery = text;
    }

    bang = bangs.get(key);
    switch(mode) {
      case 'search':
        const query = encodeURIComponent(searchQuery);
        redirect = `${bang.url}${bang.search.replace('{}', query)}`;
        break;
      case 'path':
        redirect = `${bang.url}/${path.join('/')}`;
        break;
      case 'default':
      default:
        redirect = bang.url;
        break;
    }
  }

  return { bang, key, redirect, mode };
}
