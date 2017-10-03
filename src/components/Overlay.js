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


const styles = {
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'auto',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  visibility: 'hidden',
};

function Overlay({ style, children }) {
  return (
    <div style={{ ...styles, ...style }}>
      {children}
    </div>
  )
}

export default Overlay;

