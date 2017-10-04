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

const bangs = new Map();

const github = 'https://github.com';
const meneame = 'https://www.meneame.net';
const reddit = 'https://www.reddit.com';
const twitter = 'https://twitter.com';

const bangsList = [
  github,
  meneame,
  reddit,
  twitter,
];
bangs.set('g', github);
bangs.set('gh', github);
bangs.set('git', github);
bangs.set('github', github);
bangs.set('m', meneame);
bangs.set('meneame', meneame);
bangs.set('r', reddit);
bangs.set('reddit', reddit);
bangs.set('t', twitter);
bangs.set('twitter', twitter);
bangs.set('*', 'https://encrypted.google.com');

/**
 * Given an input text, returns the corresponding redirected url.
 */
export default function parse(text: string, options): string {
  const {
    searchDelimiter,
    pathDelimiter,
   } = options;

  if (text.match(urlRegex)) {
    const hasProtocol = text.match(protocolRegex);
    return hasProtocol ? text : 'http://' + text;
  } else {
    let key;
    let mode = 'default';
    let redirect;
    let [searchKey, searchQuery] = text.split(searchDelimiter);
    const [pathKey, ...path] = text.split(pathDelimiter);
    console.log();
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

    const bang = bangs.get(key);
    switch(mode) {
      case 'search':
        redirect = `${bang}/search?q=${encodeURIComponent(searchQuery)}`;
        break;
      case 'path':
        redirect = `${bang}/${path.join('/')}`;
        break;
      case 'default':
      default:
        redirect = bang;
        break;
    }

    return { bang, key, redirect, mode };
  }
}
