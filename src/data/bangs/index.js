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

import facebook from './facebook';
import google from './google';
import googleMaps from './googleMaps';
import wikipedia from './wikipedia';
import youtube from './youtube';

// TODO
// npm react, npm redux ...
// travis
// digitalocean
// cloudflare
// gitignore



const BANGS = new Map();

BANGS.set('*', google);

BANGS.set('f', facebook);
BANGS.set('fb', facebook);
BANGS.set('facebook', facebook);

BANGS.set('gm', googleMaps);
BANGS.set('map', googleMaps);
BANGS.set('maps', googleMaps);

BANGS.set('w', wikipedia);
BANGS.set('wiki', wikipedia);
BANGS.set('wikipedia', wikipedia);

BANGS.set('y', youtube);
BANGS.set('yt', youtube);
BANGS.set('youtube', youtube);

export default BANGS;

export const bangsList = [
  facebook,
  google,
  googleMaps,
  wikipedia,
  youtube,
];

export const bangsByHostname = new Map();
bangsList.forEach((bang) => {
  const url = new URL(bang.url);
  const hostname = url.hostname;
  bangsByHostname.set(hostname, bang);
});
