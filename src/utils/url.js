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

import { bangsByHostname } from '../data/bangs';

// TODO
const DEFAULT_COLOR = 'pink';

export function getHostname(url: string): string {
  const { hostname } = new URL(url);
  return hostname;
}

export function getBang(url: string): Bang {
  const hostname = getHostname(url);
  const bang = bangsByHostname.get(hostname);
  return bang;
}

export function getColor(url: string): string {
  const bang = getBang(url);
    // TODO DRY
  if (!bang) return DEFAULT_COLOR;
  return bang.color || DEFAULT_COLOR;
}

export function getLogo(url: string): string {
  // TODO
  if (!url.length) return '';
  const hostname = getHostname(url);
  const bang = bangsByHostname.get(hostname);
  // TODO DRY
  if (!bang) return `http://${hostname}/favicon.ico`;
  return bang.logo || `http://${hostname}/favicon.ico`;
}
